import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useDebounce } from 'shared/lib/hooks';
import { SearchBar } from 'widgets/SearchBar';
import { getArticlesPageLoading, getArticlesPageSearch } from '../../model/selectors/selectors';
import { fetchArticles } from '../../model/services/fetchArticles';
import { articlesPageActions } from '../../model/slices/ArticlesPageSlice';

interface ArticlesPageSearchBarProps {
    className?: string;
}

const ArticlesPageSearchBar = memo((props: ArticlesPageSearchBarProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    const loading = useSelector(getArticlesPageLoading);
    const search = useSelector(getArticlesPageSearch);

    const updateArticlesList = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);
    const searchDebounce = useDebounce(updateArticlesList, 500);

    const onSearchChange = useCallback((query: string) => {
        dispatch(articlesPageActions.setSearch(query));
        searchDebounce();
    }, [dispatch, searchDebounce]);

    return (
        <SearchBar
            disabled={loading}
            className={className}
            query={search}
            onSearch={onSearchChange}
        />
    );
});

export default ArticlesPageSearchBar;
