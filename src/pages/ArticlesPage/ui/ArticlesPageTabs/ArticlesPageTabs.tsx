import { ArticleType, ArticleTypeFilter } from 'entities/Article';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Tab, Tabs } from 'shared/ui/Tabs';
import { getArticlesPageTypeFilter } from '../../model/selectors/selectors';
import { fetchArticles } from '../../model/services/fetchArticles';
import { articlesPageActions } from '../../model/slices/ArticlesPageSlice';

interface ArticlesPageTabsProps {
    className?: string;
}

const ArticlesPageTabs = memo((props: ArticlesPageTabsProps) => {
    const {
        className,
    } = props;
    const tab = useSelector(getArticlesPageTypeFilter);
    const dispatch = useAppDispatch();

    const tabs = useMemo<Tab<ArticleTypeFilter>[]>(() => [
        { value: 'ALL', label: 'Все' },
        { value: ArticleType.IT, label: 'IT' },
        { value: ArticleType.ECONOMICS, label: 'ECONOMICS' },
        { value: ArticleType.SCIENCE, label: 'SCIENCE' },
    ], []);

    const onTabChange = useCallback((tab: ArticleTypeFilter) => {
        dispatch(articlesPageActions.setTypeFilter(tab));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    return (
        <Tabs<ArticleTypeFilter>
            className={className}
            value={tab}
            tabs={tabs}
            onChange={onTabChange}
        />
    );
});

export default ArticlesPageTabs;
