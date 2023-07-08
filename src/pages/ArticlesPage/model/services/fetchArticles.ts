import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit,
    getArticlesPagePage,
    getArticlesPageSearch,
    getArticlesPageSortField,
    getArticlesPageSortOrder,
    getArticlesPageTypeFilter,
} from '../selectors/selectors';
import { articlesPageActions } from '../slices/ArticlesPageSlice';

interface FetchArticlesProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
    Article[],
    FetchArticlesProps,
    ThunkConfig<string>
>(
    'ArticlesPage/fetchArticles',
    async (props, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;

        const _page = getArticlesPagePage(getState());
        const _limit = getArticlesPageLimit(getState());
        const _sort = getArticlesPageSortField(getState());
        const _order = getArticlesPageSortOrder(getState());
        const q = getArticlesPageSearch(getState());
        const type = getArticlesPageTypeFilter(getState());

        try {
            addQueryParams({ _sort, _order, q });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page,
                    _limit,
                    _sort,
                    _order,
                    q,
                    type: type === 'ALL' ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }
            dispatch(articlesPageActions.setPage(_page));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
