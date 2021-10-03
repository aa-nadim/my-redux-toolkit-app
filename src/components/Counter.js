import React from 'react'

import { useDispatch } from 'react-redux'

import { decrement, increment } from '../features/counter/counterSlice'

export function Counter() {
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button style={{fontSize:"50px"}} onClick={() => dispatch(increment())}>Increment</button>
        <button style={{fontSize:"50px"}} onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}