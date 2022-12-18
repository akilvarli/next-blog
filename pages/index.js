import Link from "next/link";
import React from "react";
import { getPosts } from "../lib/post";

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}

function HomePage({ posts }) {

  return (
    <>
      <main>
        <h1>Home Page</h1>
      </main>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
