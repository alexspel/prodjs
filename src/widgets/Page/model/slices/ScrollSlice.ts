import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/scrollSchema';

const initialState: ScrollSchema = {
    data: {},
};

export const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScroll: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.data[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    actions: scrollActions,
    reducer: scrollReducer,
} = scrollSlice;
