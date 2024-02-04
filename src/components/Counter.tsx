import React, { useState } from 'react';
import classes from './counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const calc = (sign: string): void => {
        sign === '-' ? setCount(count - 1) : setCount(count + 1);
    };

    return (
        <div>
            <button className={classes.button} onClick={() => calc('-')}>-</button>
            <div>{count}</div>
            <button className={classes.button} onClick={() => calc('+')}>+</button>
        </div>
    );
};
