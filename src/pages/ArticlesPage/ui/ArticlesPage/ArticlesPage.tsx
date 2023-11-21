import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Page } from 'widgets/Page';
import { initArticlesPage } from '../../model/services/initArticlePage';
import {
    articlesPageReducer,
} from '../../model/slices/ArticlesPageSlice';
import ArticlesPageArticlesList from '../ArticlesPageArticlesList/ArticlesPageArticlesList';
import ArticlesPageFetch from '../ArticlesPageFetch/ArticlesPageFetch';
import ArticlesPageHeader from '../ArticlesPageHeader/ArticlesPageHeader';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articles: articlesPageReducer,
};

const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader
            reducers={reducers}
            autoRemoveReducer={false}
        >
            <Page className={cls.ArticlesPage}>
                <ArticlesPageHeader className={cls.ArticlesPageHeader} />
                <ArticlesPageArticlesList />
                <ArticlesPageFetch className={cls.fetchArticlesBlock} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
