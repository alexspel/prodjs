import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleListType, ArticleType } from 'entities/Article';
import { SortOrder } from 'entities/SortOrder';

export enum ArticlesSortField {
    TITLE = 'title',
    VIEWS = 'views',
    DATE = 'createdAt',
}

export type ArticleTypeFilter = ArticleType | 'ALL';

export interface ArticlesPageSchema extends EntityState<Article> {
    loading?: boolean;
    error?: string;
    page: number;
    limit?: number;
    hasMore: boolean;
    view: ArticleListType;
    inited: boolean;
    sortField: ArticlesSortField;
    sortOrder: SortOrder;
    search: string;
    typeFilter: ArticleTypeFilter;
}
