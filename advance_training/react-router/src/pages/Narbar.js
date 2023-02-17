import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Narbar() {
  return (
    <div>

    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>about</Link>
        <Link to={"posts"}>posts</Link>
    </div>
    <div>
        <Outlet />
    </div>
    </div>
  )
}
