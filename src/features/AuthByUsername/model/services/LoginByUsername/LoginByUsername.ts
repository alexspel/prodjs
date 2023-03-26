import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;

}

export const LoginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    {
        rejectValue: string
    }
>(
    'login/LoginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error('Empty response');
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
