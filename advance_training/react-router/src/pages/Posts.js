import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Posts() {
  return (
    <div>
        <Outlet />
        {[1,2,3,4].map(id=>{
            return <Link key={id} to={`${id}`}>
                <div>post {id}</div>
            </Link>
        })}
    </div>
  )
}
