import React from 'react';
import { Counter } from '../components/Counter';
import { useSelector } from 'react-redux'

const CounterPage = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            <div style={{fontSize:"100px"}}>
                {count}
            </div>
            <Counter />
        </div>
    );
};

export default CounterPage;