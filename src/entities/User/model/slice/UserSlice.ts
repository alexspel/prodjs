import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/User';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
    },
});

export const {
    actions: UserActions,
    reducer: UserReducer,
} = UserSlice;
