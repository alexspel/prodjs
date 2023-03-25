import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../..';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
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
} = counterSlice;
