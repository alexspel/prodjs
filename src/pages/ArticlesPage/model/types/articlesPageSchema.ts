import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    loading?: boolean;
    error?: string;
}
