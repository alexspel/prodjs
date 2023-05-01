import { getProfileData, getProfileError, getProfileIsLoading } from './model/selectors';
import { fetchProfileData } from './model/services';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import ProfileCard from './ui/ProfileCard/ProfileCard';

export {
    Profile,
    profileActions,
    profileReducer,
    ProfileSchema,
    fetchProfileData,
    getProfileIsLoading,
    getProfileError,
    getProfileData,
    ProfileCard,
};
