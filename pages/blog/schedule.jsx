import { getPostBySlug } from "../../lib/api";
import Container from "/component/Container/container";
import PostHeader from "component/post-header/post-header";

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const slug = "schedule";

  const post = await getPostBySlug(slug);

  return {
    props: {
      title: post.title,
      publish: post.publushDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}
