import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, incrementByAmount } from "./app/counterSlice";

const App = () => {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch()
    
    const incrementCounter = () => {
        dispatch(increment());
    };
    const decrementCounter = () => {
        dispatch(decrement());
    };
    return (
        <div style={{fontSize:"60px"}}>
            <div>Counter === {counter}</div>
            <button style={{fontSize:"50px"}} onClick={incrementCounter}>
                increment
            </button>
            <button style={{fontSize:"50px"}} onClick={decrementCounter}>
                decrement
            </button>
        </div>
    );
};

export default App;