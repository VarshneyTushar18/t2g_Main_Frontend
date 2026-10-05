const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const files = [
  "app/(service)/amazon-consulting-services/page.js",
  "app/(service)/online-business-management-amazon-in/page.js",
].map((f) => path.join(ROOT, f));

function labelize(url) {
  const u = String(url).replace(/&amp;/g, "&").trim();
  let m = u.match(/\/dp\/([A-Z0-9]{8,12})/i);
  if (m) return m[1];
  m = u.match(/\/stores\/(?:[^/]+\/)?(?:page\/)?([A-Za-z0-9_-]+)/i);
  if (m && m[1].toLowerCase() !== "page") return m[1].replace(/[-_]/g, " ");
  m = u.match(/amazon\.[^/]+\/([A-Za-z0-9_-]+)/i);
  if (m && !["dp", "stores", "gp", "page"].includes(m[1].toLowerCase())) {
    return m[1];
  }
  return "Portfolio sample";
}

const urlRe =
  /https?:\/\/(?:www\.)?(?:[\w.-]+\.)?(?:amazon\.(?:com|in|co\.uk|ae|ca|de|fr|it|es|com\.au|nl|se|sg)|amzn\.to)[^\s<'"`)]*/gi;

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");

  s = s.replace(
    /<a\b[^>]*href\s*=\s*["'](?:javascript:;|#)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (full, inner) => {
      const t = inner.replace(/<br\s*\/?>/gi, " ").replace(/\s+/g, " ").trim();
      if (/amazon\./i.test(t) || /https?:\/\//i.test(t)) {
        const urls = t.match(urlRe);
        if (urls && urls.length) return labelize(urls[0]);
        return labelize(t);
      }
      return t || "-";
    },
  );

  s = s.replace(
    /https?:\/\/(?:www\.)?(?:[\w.-]+\.)?amazon\.[^\s<]+(?:\s*<br\s*\/?>\s*[A-Za-z0-9-]+)?/gi,
    (m) => {
      const flat = m.replace(/<br\s*\/?>/gi, "").replace(/\s+/g, "");
      return labelize(flat);
    },
  );

  fs.writeFileSync(file, s, "utf8");
  console.log("updated", path.relative(ROOT, file));
}
