import { getUserAuthData, getUserInited } from './model/selectors';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export {
    User,
    UserSchema,
    getUserAuthData,
    getUserInited,
    userActions,
    userReducer,
};
