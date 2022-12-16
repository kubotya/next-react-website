import Meta from "../component/Meta/meta";
import Container from "../component/Container/container";
import Hero from "../component/Hero/Hero";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
}
