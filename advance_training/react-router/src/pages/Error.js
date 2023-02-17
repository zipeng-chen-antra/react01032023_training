import React from 'react'

export default function ErrorPage({msg}) {
  console.log(msg);
  return (
    <>
    <h1>404 Page Not Found</h1>
    <div>{msg}</div>
    </>
  )
}
