import { createClient } from "microcms-js-sdk";

export const client = createClient({
  apiKey: "xUCt0xjuOqt87ppccFlgp3U8SaW3d0umUoKF",
  serviceDomain: "kubota",
});

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
}
