import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>About</h1>
        <div>
            <div>Everything about me</div>
            <div>My credit card num: xxxx</div>
            <div>My SSN: xxxx</div>
        </div>
        <div>
          <button>
            Throw Error
          </button>
          <h1>Sub routes</h1>

          <Outlet />
        </div>
    </div>
  )
}

export async function action(){
  throw new Error("some error");
}
