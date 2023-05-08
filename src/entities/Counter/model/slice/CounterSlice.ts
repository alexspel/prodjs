import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counter';

const initialState: CounterSchema = {
    value: 0,
};

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc: (state) => {
            state.value += 1;
        },
        dec: (state) => {
            state.value -= 1;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
} = CounterSlice;
