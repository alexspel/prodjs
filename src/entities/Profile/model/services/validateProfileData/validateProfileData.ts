// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import { getProfileForm } from '../../selectors';
// import { Profile } from '../../types/profile';

import { Profile, ValidationProfileError } from '../../types/profile';

// // interface LoginByUsernameProps {
// //     username: string;
// //     password: string;

// // }

// export const validateProfileData = createAsyncThunk<
//     Profile,
//     void,
//     ThunkConfig<string>
// >(
//     'profile/validateProfileData',
//     async (_, thunkApi) => {
//         const { extra, rejectWithValue, getState } = thunkApi;
//         const formData = getProfileForm(getState());
//         try {
//             const response = await extra.api.put('/profile', formData);
//             return response.data;
//         } catch (e) {
//             return rejectWithValue('error');
//         }
//     },
// );

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidationProfileError.NO_DATA];
    }
    const {
        lastname, first,
        age,
        //  currency,
        country,
        //   avatar,
    } = profile;

    const errors: ValidationProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidationProfileError.INCORRECT_USER_DATA);
    }

    if (Number.isNaN(age) || !age || age <= 0) {
        errors.push(ValidationProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidationProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
