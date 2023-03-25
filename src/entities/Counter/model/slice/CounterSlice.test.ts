import { counterReducer } from 'entities/Counter';
import { CounterSchema } from '../types/CounterSchema';
import { counterActions } from './CounterSlice';

describe('CounterSlice.test', () => {
    test('inc', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.inc())).toEqual({ value: 11 });
    });

    test('dec', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.dec())).toEqual({ value: 9 });
    });

    test('inc empty state', () => {
        expect(counterReducer(undefined, counterActions.inc())).toEqual({ value: 1 });
    });

    test('dec empty state', () => {
        expect(counterReducer(undefined, counterActions.dec())).toEqual({ value: -1 });
    });
});
