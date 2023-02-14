import React from "react";
import useFetch from "../../hooks/useFetch";

export default function PostsCH() {
  const {data, error, isLoading} = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>Posts</h1>

      <div>
        {data.map((post) => {
          return (
            <div key={post.id}>
              <div>{post.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
