import React, { useEffect, useState } from "react";


export default function Fetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // getLikes().then(data=>{
    //     setLikes(data);
    // })
    // async function fetchPosts() {
    //   try {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const posts = await res.json();
    //     setPosts(posts);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // fetchPosts();

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
        setPosts(data);
    }).catch(console.log)
  }, []);

  return (
    <div>
      <h1>Fetch Info On Page render</h1>
      <div>
        {posts.map((post) => {
          return (
            <React.Fragment key={post.id}>
              <div>{post.userId}</div>
              <div>{post.title}</div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

