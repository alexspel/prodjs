import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProfileData, updateProfileData } from '../services';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    loading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly(state, action: PayloadAction<boolean>) {
            state.readonly = action.payload;
        },
        updateProfile(state, action: PayloadAction<Profile>) {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelEdit(state) {
            state.form = state.data;
            state.readonly = true;
            state.validationErrors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.loading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validationErrors = undefined;
                state.loading = true;
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.loading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validationErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.loading = false;
                state.validationErrors = action.payload;
            });
    },
});

export const {
    actions: profileActions,
    reducer: profileReducer,
} = ProfileSlice;
