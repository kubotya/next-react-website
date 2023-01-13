import Meta from "../component/Meta/meta";
import Container from "../component/Container/container";
import Hero from "../component/Hero/Hero";
import PostBody from "../component/Postbody/post-body";
import Contact from "../component/Contact/Contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../component/Two-column/Two-column";
import Image from "next/image";
import eyecatch from "/pages/blog/images/about.jpg";

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImage={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="ABOUT" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          size="(min-width: 1152px) 1152px, 100vw"
          priority="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。3次元や2次元の造形、プログラミングやデザインなど、
              さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れ
              ながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提案が数多くありますが、
              特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。
              毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで
              自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから
              取り入れて、いいものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、
              これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
