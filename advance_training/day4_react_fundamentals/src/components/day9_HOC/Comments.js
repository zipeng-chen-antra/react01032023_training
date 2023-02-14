import React, { useEffect, useState } from 'react'
import { withLoading } from '../../HOC/withLoading'

function Comments({
    isLoading,
    stopLoading,
    Loader
}) {
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=>res.json())
        .then((data)=>{
            setComments(data);
            stopLoading();
        })
        .catch(console.log)
    })

  return (
    <div>
        <h1>Comments</h1>
        {isLoading ? <Loader /> : <div>
            {comments.map(comment=>{
                return <div key={comment.id}>
                    <div>{comment.email}</div>
                    <div>{comment.body}</div>
                </div>
            })}
        </div> }
    </div>
  )
}


export default withLoading(Comments,"spinner")