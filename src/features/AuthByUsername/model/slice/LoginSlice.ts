import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginByUsername } from '../services/LoginByUsername/LoginByUsername';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(LoginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    actions: LoginActions,
    reducer: LoginReducer,
} = LoginSlice;
