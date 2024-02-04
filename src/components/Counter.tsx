import React, { useState } from 'react';
import './counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const calc = (sign: string): void => {
        sign === '-' ? setCount(count - 1) : setCount(count + 1);
    };

    return (
        <>
            <button onClick={() => calc('-')}>-</button>
            <div>{count}</div>
            <button onClick={() => calc('+')}>+</button>
        </>
    );
};
