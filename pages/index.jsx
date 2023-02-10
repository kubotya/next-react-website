import { getAllPosts } from "../lib/api";
import Container from "../component/Container/container";
import Hero from "../component/Hero/Hero";
import Posts from "../component/Posts/post";
import Pagination from "../component/Pagination/pagination";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "../lib/constants";

export default function Home({ posts }) {
  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="./blog" nextText="More Posts" />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

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
