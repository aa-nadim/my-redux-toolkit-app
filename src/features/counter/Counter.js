import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button style={{fontSize:"50px"}} onClick={() => dispatch(increment())}>Increment</button>
        <span style={{fontSize:"100px"}}>{count}</span>
        <button style={{fontSize:"50px"}} onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}