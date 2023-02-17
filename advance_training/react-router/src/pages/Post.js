import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {

  const {id} = useParams();
  const [post,setPost] = useState({});
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(setPost);
  },[id])

  return (
    <div>
      <h1>Post {id}</h1>
      <div>
        <h3>{post.title}</h3>
        <div>{post.body}</div>
      </div>
    </div>
  )
}
