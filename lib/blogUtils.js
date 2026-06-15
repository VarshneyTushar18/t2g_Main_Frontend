/** Client-safe blog helpers (no fetch). */

export const DEFAULT_BLOG_IMAGE = "/images/blog-bg.webp";

const SITE_ORIGIN =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) ||
  "https://www.tech2globe.com";

const LEGACY_BLOG_HOST =
  /https?:\/\/(?:blog\.tech2globe\.com|(?:www\.)?tech2globe\.com\/blog)/gi;

export function blogPostHref(post) {
  if (post?.slug) return `/blogs/${post.slug}`;
  const link = post?.link || "";
  if (link.startsWith("/blogs/")) return link;
  try {
    const u = new URL(link);
    return u.pathname || "/blogs";
  } catch {
    return "/blogs";
  }
}

export function stripHtml(html = "") {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractFirstImageFromHtml(html = "") {
  const source = String(html || "");
  const match =
    source.match(/<img[^>]+src=["']([^"']+)["']/i) ||
    source.match(/url\(["']?([^"')]+)["']?\)/i);
  return match?.[1]?.trim() || "";
}

/** Rewrite legacy WordPress blog host → main site (or Cloudinary URLs from API). */
export function normalizeBlogImageUrl(url = "") {
  const trimmed = String(url || "").trim();
  if (!trimmed) return "";

  let resolved = trimmed.replace(LEGACY_BLOG_HOST, SITE_ORIGIN);

  if (resolved.startsWith("/wp-content/") || resolved.startsWith("/uploads/")) {
    return `${SITE_ORIGIN}${resolved}`;
  }

  if (/^https?:\/\/www\.tech2globe\.com\/wp-content\//i.test(resolved)) {
    return resolved;
  }

  if (resolved.startsWith("//")) {
    return `https:${resolved}`;
  }

  return resolved;
}

/** Best image for cards/slider: featured → SEO → first in-body image → default. */
export function resolvePostImage(post) {
  const candidates = [
    post?.featured_image,
    post?.yoast_head_json?.og_image,
    post?.seo?.og_image,
    post?.yoast_head_json?.twitter_image,
    post?.seo?.twitter_image,
    extractFirstImageFromHtml(post?.excerpt?.rendered),
    extractFirstImageFromHtml(post?.content?.rendered),
    extractFirstImageFromHtml(post?.excerpt),
    extractFirstImageFromHtml(post?.content),
  ];

  for (const candidate of candidates) {
    const normalized = normalizeBlogImageUrl(candidate);
    if (normalized) return normalized;
  }

  return DEFAULT_BLOG_IMAGE;
}

/** Rewrite in-article image URLs away from the old WordPress blog host. */
export function rewriteBlogContentImages(html = "") {
  if (!html || typeof html !== "string") return html;

  return html
    .replace(LEGACY_BLOG_HOST, SITE_ORIGIN)
    .replace(
      /src=(["'])(\/wp-content\/[^"']+)\1/gi,
      (_, quote, path) => `src=${quote}${SITE_ORIGIN}${path}${quote}`,
    )
    .replace(/<img(?![^>]*\bloading=)/gi, '<img loading="lazy"');
}
