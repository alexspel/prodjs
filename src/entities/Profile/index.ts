import {
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileRaadonly,
} from './model/selectors';
import { fetchProfileData, updateProfileData } from './model/services';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import ProfileCard from './ui/ProfileCard/ProfileCard';

export {
    Profile,
    profileActions,
    profileReducer,
    ProfileSchema,
    fetchProfileData,
    updateProfileData,
    getProfileIsLoading,
    getProfileError,
    getProfileData,
    getProfileForm,
    getProfileRaadonly,
    ProfileCard,
};
