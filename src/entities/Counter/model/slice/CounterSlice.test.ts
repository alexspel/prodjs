import { CounterSchema } from '../types/CounterSchema';
import { CounterActions, CounterReducer } from './CounterSlice';

describe('CounterSlice.test', () => {
    test('inc', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(CounterReducer(state, CounterActions.inc())).toEqual({ value: 11 });
    });

    test('dec', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(CounterReducer(state, CounterActions.dec())).toEqual({ value: 9 });
    });

    test('inc empty state', () => {
        expect(CounterReducer(undefined, CounterActions.inc())).toEqual({ value: 1 });
    });

    test('dec empty state', () => {
        expect(CounterReducer(undefined, CounterActions.dec())).toEqual({ value: -1 });
    });
});
