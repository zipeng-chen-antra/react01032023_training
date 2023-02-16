import React, { useEffect } from 'react'
import useLog from '../../hooks/useLog'

export default function Child2() {
    useLog("Child2")
  return (
    <div>
        <h4>Child 2</h4>
    </div>
  )
}


