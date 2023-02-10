import { getAllPosts } from "../../lib/api";
import Meta from "component/Meta/meta";
import Container from "component/Container/container";
import Hero from "component/Hero/Hero";
import Posts from "../../component/Posts/post";
import { getPlaiceholder } from "plaiceholder";

import { eyecatchLocal } from "../../lib/constants";

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="BLOG" subtitle="Recent Posts" />

      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
