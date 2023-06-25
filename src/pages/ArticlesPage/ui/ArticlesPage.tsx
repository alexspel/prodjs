import { ArticleList } from 'entities/Article';
import { ArticleListType } from 'entities/Article/model/types/article';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import GridIcon from 'shared/assets/icons/tiled-24-24.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useLocalStorage } from 'shared/lib/hooks/useLocalStorage/useLocalStorage';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import Page from 'widgets/Page/Page';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import {
    articlesPageReducer, getArticles,
} from '../model/slices/ArticlesPageSlice';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articles: articlesPageReducer,
};

const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const [view, setView] = useLocalStorage({ name: 'view', defaultValue: ArticleListType.LIST });

    const onChangeView = useCallback((view: ArticleListType) => {
        setView(view);
    }, [setView]);

    useInitialEffect(() => {
        dispatch(fetchArticles({}));
    });

    return (
        <DynamicModuleLoader
            reducers={reducers}
            autoRemoveReducer
        >
            <Page>
                <div className={cls.actions}>
                    <Button
                        className={classNames('', { [cls.selectedListView]: view === ArticleListType.GRID })}
                        theme={ButtonTheme.CLEAR}
                        onClick={() => onChangeView(ArticleListType.GRID)}
                    >
                        <Icon Svg={GridIcon} />
                    </Button>
                    <Button
                        className={classNames('', { [cls.selectedListView]: view === ArticleListType.LIST })}
                        theme={ButtonTheme.CLEAR}
                        onClick={() => onChangeView(ArticleListType.LIST)}
                    >
                        <Icon Svg={ListIcon} />
                    </Button>
                </div>
                <ArticleList
                    articles={articles}
                    view={view as ArticleListType}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
