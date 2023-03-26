import { createSelector } from 'reselect';
import { getCounter } from '..';
import { CounterSchema } from '../../types/CounterSchema';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
