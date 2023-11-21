import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleTypeFilter } from 'entities/Article';
import { SortOrder } from 'entities/SortOrder';
import { getArticlesPageInited } from '../../model/selectors/selectors';
import { fetchArticles } from '../../model/services/fetchArticles';
import { articlesPageActions } from '../../model/slices/ArticlesPageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            const orderFromUrl = searchParams.get('_order') as SortOrder;
            const sortFromUrl = searchParams.get('_sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('q');
            const typeFromUrl = searchParams.get('type') as ArticleTypeFilter;

            if (orderFromUrl) {
                dispatch(articlesPageActions.setSortOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                dispatch(articlesPageActions.setSortField(sortFromUrl));
            }

            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }

            if (typeFromUrl) {
                dispatch(articlesPageActions.setTypeFilter(typeFromUrl));
            }
            dispatch(articlesPageActions.init());
            dispatch(fetchArticles({}));
        }
    },
);
