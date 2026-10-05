/**
 * Remove outbound links to Amazon official domains.
 * Keeps internal routes like /amazon-consulting-services.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SCAN_DIRS = ["app", "data", "lib", "public"].map((d) => path.join(ROOT, d));
const EXTS = new Set([".js", ".jsx", ".ts", ".tsx", ".html", ".md", ".json"]);

const AMAZON_HOST =
  String.raw`(?:[\w.-]+\.)?(?:amazon\.(?:com|in|co\.uk|ae|ca|de|fr|it|es|com\.au|com\.br|com\.mx|nl|se|pl|sg|com\.tr|eg|sa)|amzn\.to|advertising\.amazon\.com|sellercentral\.amazon\.(?:com|in|co\.uk|ae|de)|services\.amazon\.(?:com|in|co\.uk)|sell\.amazon\.(?:com|in)|affiliate-program\.amazon\.com|aws\.amazon\.com)`;

const URL_RE = new RegExp(
  String.raw`https?://(?:www\.)?${AMAZON_HOST}[^"'\\\s<>]*`,
  "gi",
);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === "node_modules" || ent.name === ".next" || ent.name === ".tools") continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (EXTS.has(path.extname(ent.name).toLowerCase())) out.push(p);
  }
  return out;
}

function stripAnchorTags(html) {
  // <a ... href="https://amazon...">inner</a> -> inner
  const re = new RegExp(
    String.raw`<a\b[^>]*\bhref\s*=\s*(["'])https?://(?:www\.)?${AMAZON_HOST}[^"']*\1[^>]*>([\s\S]*?)</a>`,
    "gi",
  );
  let prev;
  let cur = html;
  do {
    prev = cur;
    cur = cur.replace(re, "$2");
  } while (cur !== prev);
  return cur;
}

function stripLinkProps(src) {
  // Remove JS object properties: link: "https://amazon..."
  const re = new RegExp(
    String.raw`^[ \t]*link\s*:\s*(["'])https?://(?:www\.)?${AMAZON_HOST}[^"']*\1\s*,?\s*\r?\n`,
    "gim",
  );
  return src.replace(re, "");
}

function neutralizeRemainingHrefs(src) {
  // href="https://amazon..." -> href="#" (and mark) for any leftovers that aren't full anchors
  const re = new RegExp(
    String.raw`(href\s*=\s*)(["'])https?://(?:www\.)?${AMAZON_HOST}[^"']*\2`,
    "gi",
  );
  return src.replace(re, '$1"#"');
}

function processFile(file) {
  const original = fs.readFileSync(file, "utf8");
  if (!URL_RE.test(original)) return null;
  URL_RE.lastIndex = 0;

  // Skip form placeholders that are not clickable links (keep UX copy)
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  if (rel.includes("AmazonOnboardingForm.js")) {
    // Only remove real hrefs if any; placeholder text is fine
    let next = stripAnchorTags(original);
    next = neutralizeRemainingHrefs(next);
    if (next === original) return null;
    fs.writeFileSync(file, next, "utf8");
    return { file: rel, kind: "form" };
  }

  let next = stripLinkProps(original);
  next = stripAnchorTags(next);
  next = neutralizeRemainingHrefs(next);

  // Also remove bare URL strings used only as link values already handled;
  // leave plain-text URL mentions in body copy? User asked to remove links that redirect.
  // If a remaining URL appears only inside quotes as a standalone string in arrays, remove line.
  const bareLinkLine = new RegExp(
    String.raw`^[ \t]*(["'])https?://(?:www\.)?${AMAZON_HOST}[^"']*\1\s*,?\s*\r?\n`,
    "gim",
  );
  next = next.replace(bareLinkLine, "");

  if (next === original) return null;
  fs.writeFileSync(file, next, "utf8");

  const before = (original.match(URL_RE) || []).length;
  URL_RE.lastIndex = 0;
  const after = (next.match(URL_RE) || []).length;
  URL_RE.lastIndex = 0;
  return { file: rel, before, after };
}

const files = SCAN_DIRS.flatMap((d) => walk(d));
const results = [];
for (const f of files) {
  const r = processFile(f);
  if (r) results.push(r);
}

// Final verification scan
const remaining = [];
for (const f of files) {
  const text = fs.readFileSync(f, "utf8");
  URL_RE.lastIndex = 0;
  if (!URL_RE.test(text)) continue;
  URL_RE.lastIndex = 0;
  const matches = text.match(URL_RE) || [];
  // Allow placeholders / non-href mentions in forms
  const rel = path.relative(ROOT, f).replace(/\\/g, "/");
  const hrefMatches = [];
  const hrefRe = new RegExp(
    String.raw`href\s*=\s*(["'])https?://(?:www\.)?${AMAZON_HOST}[^"']*\1`,
    "gi",
  );
  let m;
  while ((m = hrefRe.exec(text))) hrefMatches.push(m[0]);
  const linkPropRe = new RegExp(
    String.raw`link\s*:\s*(["'])https?://(?:www\.)?${AMAZON_HOST}[^"']*\1`,
    "gi",
  );
  const linkProps = text.match(linkPropRe) || [];
  if (hrefMatches.length || linkProps.length) {
    remaining.push({ file: rel, hrefs: hrefMatches, linkProps });
  }
}

console.log(JSON.stringify({ changed: results.length, results, remaining }, null, 2));
