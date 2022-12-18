import Head from "next/head";
import React from "react";
import { getPost, getSlugs } from "../../lib/post";

export async function getStaticPaths() {
  const slugs = await getSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("[PostPage] getStaticProps()", slug);
  const post = await getPost(slug);

  return {
    props: { post },
  };
}

function PostPage({ post }) {
  console.log("[PostPage] render:", post);

  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
