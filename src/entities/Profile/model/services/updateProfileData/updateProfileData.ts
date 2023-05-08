import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors';
import { Profile, ValidationProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

// interface LoginByUsernameProps {
//     username: string;
//     password: string;

// }

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidationProfileError[]>
>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue([ValidationProfileError.SERVER_ERROR]);
        }
    },
);
