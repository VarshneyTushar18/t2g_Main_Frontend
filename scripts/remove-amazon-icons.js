/**
 * Remove Amazon circular "a" smile icons from page headings/content.
 * Only deletes matching <img>/<Image> tags — no other whitespace changes.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, "app");

const ICON_RE = /amazon-icon\.png|amazon_icon\.png/i;

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === "node_modules" || ent.name === ".next") continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(js|jsx|tsx)$/.test(ent.name)) out.push(p);
  }
  return out;
}

function stripIcons(src) {
  // Match only the tag itself; leave surrounding spaces as-is
  // (single leftover space before heading text is fine)
  let next = src.replace(
    /<Image\b[\s\S]*?src=["'][^"']*amazon[-_]?icon\.png[^"']*["'][\s\S]*?\/?>/gi,
    "",
  );
  next = next.replace(
    /<img\b[\s\S]*?src=["'][^"']*amazon[-_]?icon\.png[^"']*["'][\s\S]*?\/?>/gi,
    "",
  );
  return next;
}

const files = walk(APP);
const changed = [];
for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  if (!ICON_RE.test(original)) continue;
  const next = stripIcons(original);
  if (next === original) continue;
  fs.writeFileSync(file, next, "utf8");
  changed.push(path.relative(ROOT, file).replace(/\\/g, "/"));
}

const remaining = [];
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  if (ICON_RE.test(text)) remaining.push(path.relative(ROOT, file).replace(/\\/g, "/"));
}

console.log(JSON.stringify({ changedCount: changed.length, changed, remaining }, null, 2));
