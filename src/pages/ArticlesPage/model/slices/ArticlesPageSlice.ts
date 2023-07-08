import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleListType } from 'entities/Article';
import { SortOrder } from 'entities/SortOrder';
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticles } from '../services/fetchArticles';
import { ArticleTypeFilter, ArticlesPageSchema, ArticlesSortField } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (comment: Article) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => state.articles || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(
        {
            loading: false,
            error: undefined,
            ids: [],
            entities: {},
            page: 1,
            limit: 5,
            hasMore: false,
            view: ArticleListType.LIST,
            inited: false,
            sortField: ArticlesSortField.DATE,
            sortOrder: SortOrder.ASC,
            typeFilter: 'ALL',
            search: '',
        },
    ),
    reducers: {
        init: (state, action: PayloadAction<URLSearchParams>) => {
            state.search = action.payload.get('q') ? action.payload.get('q') as string : state.search;
            state.sortField = action.payload.get('_sort') ? action.payload.get('_sort') as ArticlesSortField : state.sortField;
            state.sortOrder = action.payload.get('_order') ? action.payload.get('_order') as SortOrder : state.sortOrder;
            state.view = (localStorage.getItem(VIEW_LOCALSTORAGE_KEY) ?? ArticleListType.GRID) as ArticleListType;
            state.inited = true;
            state.page = 0;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSortField: (state, action: PayloadAction<ArticlesSortField>) => {
            state.sortField = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<SortOrder>) => {
            state.sortOrder = action.payload;
        },
        setTypeFilter: (state, action: PayloadAction<ArticleTypeFilter>) => {
            state.typeFilter = action.payload;
        },
        setView: (state, action: PayloadAction<ArticleListType>) => {
            state.view = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.loading = false;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
                state.hasMore = action.payload.length >= (state?.limit ?? 0);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSlice;
