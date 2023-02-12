import { useState } from 'react';
import { ICounter } from './ICounter';
import classes from './Counter.module.scss';

export const Counter = ({ value = 0 }: ICounter) => {
    const [val, setVal] = useState(value);
    return (
        <div className={classes.counter}>
            <h1>{val}</h1>
            <button onClick={() => setVal(v => v + 1)}>Counter</button>
        </div>
    );
};