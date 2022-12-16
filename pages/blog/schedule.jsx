import { getPostBySlug } from "../blog/lib/api";
import Container from "/component/Container/container";

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <h1>{title}</h1>
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

p.226から