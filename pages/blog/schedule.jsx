import { getPostBySlug } from "../../lib/api";
import Container from "/component/Container/container";
import PostHeader from "../../component/post-header/post-header";
import PostBody from "component/Postbody/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "component/Two-column/Two-column";
import Image from "next/image";

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

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar></TwoColumnSidebar>
        </TwoColumn>
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
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}

