import {
    getArticlesPageHasMore, getArticlesPageInited, getArticlesPageLoading, getArticlesPagePage,
} from 'pages/ArticlesPage/model/selectors/selectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Button } from 'shared/ui/Button';
import { fetchArticles } from '../../model/services/fetchArticles';

interface ArticlesPageFetchProps {
    className?: string;
}

const ArticlesPageFetch = memo((props: ArticlesPageFetchProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const loading = useSelector(getArticlesPageLoading);
    const page = useSelector(getArticlesPagePage);
    const hasMore = useSelector(getArticlesPageHasMore);
    const inited = useSelector(getArticlesPageInited);

    const onFetchArticles = useCallback(() => {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticles({}));
    }, [dispatch, page]);

    useInitialEffect(() => {
        onFetchArticles();
    });

    if (!hasMore) {
        return null;
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={() => { onFetchArticles(); }}
            disabled={loading}
        >
            {t('Load more')}
        </Button>

    );
});

export default ArticlesPageFetch;
