import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewCommentSchema } from '../types/addNewCommentSchema';

const initialState: addNewCommentSchema = {
    data: '',
};

export const AddNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setNewCommentText: (state, action: PayloadAction<string>) => {
            state.data = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state, action) => {
    //             state.error = undefined;
    //             state.loading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state, action) => {
    //             state.loading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const {
    actions: addNewCommentActions,
    reducer: addNewCommentReducer,
} = AddNewCommentSlice;
