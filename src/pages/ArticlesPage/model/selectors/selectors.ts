import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleListType, ArticleSortField } from 'entities/Article';
import { SortOrder } from 'entities/SortOrder';

export const getArticlesPageLoading = (state: StateSchema) => state.articles?.loading || false;
export const getArticlesPageError = (state: StateSchema) => state.articles?.error;
export const getArticlesPagePage = (state: StateSchema) => state.articles?.page ?? 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articles?.limit ?? 5;
export const getArticlesPageHasMore = (state: StateSchema) => state.articles?.hasMore || false;
export const getArticlesPageInited = (state: StateSchema) => state.articles?.inited || false;
export const getArticlesPageView = (state: StateSchema) => state.articles?.view ?? ArticleListType.LIST;
export const getArticlesPageSortField = (state: StateSchema) => state.articles?.sortField || ArticleSortField.DATE;
export const getArticlesPageSortOrder = (state: StateSchema) => state.articles?.sortOrder || SortOrder.ASC;
export const getArticlesPageSearch = (state: StateSchema) => state.articles?.search ?? '';
export const getArticlesPageTypeFilter = (state: StateSchema) => state.articles?.typeFilter || 'ALL';
