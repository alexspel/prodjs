import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Loader } from 'shared/ui/Loader';
import { Page } from 'widgets/Page';
import { getArticlesPageInited, getArticlesPageLoading } from '../../model/selectors/selectors';
import {
    articlesPageActions,
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
    const inited = useSelector(getArticlesPageInited);
    const loading = useSelector(getArticlesPageLoading);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        if (!inited) {
            dispatch(articlesPageActions.init(searchParams));
        }
    });

    return (
        <DynamicModuleLoader
            reducers={reducers}
            autoRemoveReducer
        >
            <Page className={cls.ArticlesPage}>
                <ArticlesPageHeader className={cls.ArticlesPageHeader} />
                <ArticlesPageArticlesList />

                {(loading || !inited) && (
                    <div className={cls.loaderBlock}>
                        <Loader />
                    </div>
                )}
                {inited && <ArticlesPageFetch className={cls.fetchArticlesBlock} />}
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
