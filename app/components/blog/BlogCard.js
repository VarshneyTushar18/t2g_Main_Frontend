import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { blogPostHref, stripHtml, formatBlogListDate } from "@/lib/blogApi";
import BlogPostImage from "@/app/components/blog/BlogPostImage";
import Style from "@/app/blogs/blogs.module.css";

export default function BlogCard({ post, priority = false }) {
  const href = blogPostHref(post);
  const title = stripHtml(post.title?.rendered || "");
  const excerpt = stripHtml(post.excerpt?.rendered || "");
  const date = formatBlogListDate(post.date);
  const author = post.author || "Tech2globe";

  return (
    <article className={Style.card}>
      <Link href={href} className={Style.cardImageWrap} aria-label={title}>
        <BlogPostImage post={post} priority={priority} className={Style.cardImage} />
      </Link>
      <div className={Style.cardBody}>
        <h2 className={Style.cardTitle}>
          <Link href={href}>{title}</Link>
        </h2>
        <p className={Style.cardMeta}>
          {date ? (
            <>
              <span className={Style.metaDate}>
                <FaRegCalendarAlt className={Style.metaIcon} aria-hidden="true" />
                {date}
              </span>
              <span className={Style.metaSep}> · </span>
            </>
          ) : null}
          <span>
            posted by <span className={Style.metaAuthor}>{author}</span>
          </span>
          <span className={Style.metaSep}> · </span>
          <span className={Style.metaReplies}>0 Replies</span>
        </p>
        {excerpt ? (
          <p className={Style.cardExcerpt}>
            {excerpt.length > 140 ? `${excerpt.slice(0, 140)}…` : excerpt}
          </p>
        ) : null}
        <Link href={href} className={Style.readMoreBtn}>
          Read More
        </Link>
      </div>
    </article>
  );
}
