import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button } from 'shared/ui/Button';
import { getCounterValue } from '../model/selectors';
import { CounterActions } from '../model/slice/CounterSlice';

const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const inc = () => {
        dispatch(CounterActions.inc());
    };
    const dec = () => {
        dispatch(CounterActions.dec());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="inc-btn" onClick={inc}>+</Button>
            <Button data-testid="dec-btn" onClick={dec}>-</Button>
        </div>
    );
};

export default Counter;
