import React from "react";
import useFetch from "../../hooks/useFetch";

export default function PostCH() {
  const [post,error,loading] = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  if(error) return <h1>Error</h1>
  if(loading) return <div>loading...</div>
  return (
    <div>
      <h1>Post with ID 1</h1>
      <div>
        <div>Title: {post.title}</div>
        <div>Posts {post.body}</div>
      </div>
    </div>
  );
}
