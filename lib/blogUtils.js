/** Client-safe blog helpers (no fetch). */

export const DEFAULT_BLOG_IMAGE = "/images/blog-bg.webp";

const BLOG_MEDIA_ORIGIN = "https://blog.tech2globe.com";

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

/** Fix wp-content paths that point at www but live on the WordPress blog host. */
export function normalizeBlogImageUrl(url = "") {
  const trimmed = String(url || "").trim();
  if (!trimmed) return "";

  if (trimmed.startsWith("/wp-content/") || trimmed.startsWith("/uploads/")) {
    return `${BLOG_MEDIA_ORIGIN}${trimmed}`;
  }

  if (/^https?:\/\/www\.tech2globe\.com\/wp-content\//i.test(trimmed)) {
    return trimmed.replace(
      /^https?:\/\/www\.tech2globe\.com/i,
      BLOG_MEDIA_ORIGIN,
    );
  }

  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`;
  }

  return trimmed;
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

/** Rewrite in-article image URLs so migrated WordPress media loads. */
export function rewriteBlogContentImages(html = "") {
  if (!html || typeof html !== "string") return html;

  return html
    .replace(
      /src=(["'])(https?:\/\/www\.tech2globe\.com\/wp-content\/[^"']+)\1/gi,
      (_, quote, url) =>
        `src=${quote}${url.replace(/^https?:\/\/www\.tech2globe\.com/i, BLOG_MEDIA_ORIGIN)}${quote}`,
    )
    .replace(
      /src=(["'])(\/wp-content\/[^"']+)\1/gi,
      (_, quote, path) => `src=${quote}${BLOG_MEDIA_ORIGIN}${path}${quote}`,
    );
}
