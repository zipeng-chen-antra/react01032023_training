import React, { useEffect, useState } from "react";
import wait from "../../util/wait";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((postData) => {
        wait(1500).then(() => {
          setPosts(postData);
          setIsLoading(false);
        });
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
