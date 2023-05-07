import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors';
import { Profile } from '../../types/profile';

// interface LoginByUsernameProps {
//     username: string;
//     password: string;

// }

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.put('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
