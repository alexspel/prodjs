import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleListType,
    ArticleSortField,
    ArticleTypeFilter,
} from 'entities/Article';
import { SortOrder } from 'entities/SortOrder';

export interface ArticlesPageSchema extends EntityState<Article> {
    loading?: boolean;
    error?: string;
    page: number;
    limit?: number;
    hasMore: boolean;
    view: ArticleListType;
    inited: boolean;
    sortField: ArticleSortField;
    sortOrder: SortOrder;
    search: string;
    typeFilter: ArticleTypeFilter;
}
