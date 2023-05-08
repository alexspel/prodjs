import { createSelector } from 'reselect';
import { getCounter } from '..';
import { CounterSchema } from '../../types/counter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
