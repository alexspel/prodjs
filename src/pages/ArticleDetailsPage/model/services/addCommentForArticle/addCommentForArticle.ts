import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import {
    fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export interface addCommentForArticleProps {
    articleId: string;
    text: string;
}

export const addCommentForArticle = createAsyncThunk<Comment, addCommentForArticleProps, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (props, thunkApi) => {
        const {
            articleId,
            text,
        } = props;

        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());

        if (!userData || !text || !articleId) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                userId: userData.id,
                articleId,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(articleId));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
