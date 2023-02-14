import React, { useEffect, useState } from "react";
import { withLoading } from "../../HOC/withLoading";
import wait from "../../util/wait";

function Posts({
  isLoading,
  stopLoading,
  Loader
}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((postData) => {
        wait(1500).then(() => {
          setPosts(postData);
          stopLoading();
        });
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? (
        <Loader />
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

export default withLoading(Posts,"spinner")