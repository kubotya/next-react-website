import Meta from "component/Meta/meta";
import Container from "component/Container/container";
import Hero from "component/Hero/Hero";

export default function Home() {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="BLOG" subtitle="Recent Posts" />
    </Container>
  );
}
