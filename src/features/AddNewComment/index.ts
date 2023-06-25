import { getNewCommentText } from './model/selectors/getNewCommentText';
import {
    addNewCommentActions, addNewCommentReducer,
} from './model/slices/AddNewCommentSlice';
import type { addNewCommentSchema } from './model/types/addNewCommentSchema';

export {
    addNewCommentActions,
    addNewCommentReducer, addNewCommentSchema,
    getNewCommentText,
};
