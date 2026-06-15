import Image from "next/image";
import { resolvePostImage, stripHtml } from "@/lib/blogApi";

const CARD_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
const SLIDER_SIZES = "(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw";
const HERO_SIZES = "(max-width: 768px) 100vw, 800px";

export default function BlogPostImage({
  post,
  variant = "card",
  priority = false,
  className = "",
}) {
  const src = resolvePostImage(post);
  const alt = stripHtml(post?.title?.rendered || post?.title || "Blog post");

  if (variant === "hero") {
    return (
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        sizes={HERO_SIZES}
        priority={priority}
        quality={80}
        className={className}
      />
    );
  }

  if (variant === "slider") {
    return (
      <Image
        src={src}
        alt=""
        fill
        sizes={SLIDER_SIZES}
        quality={75}
        className={className}
        aria-hidden="true"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={480}
      height={240}
      sizes={CARD_SIZES}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      quality={75}
      className={className}
    />
  );
}
