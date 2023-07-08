import { SortOrder } from 'entities/SortOrder';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks';
import { Select, SelectOption } from 'shared/ui/Select';
import { getArticlesPageSortField, getArticlesPageSortOrder } from '../../model/selectors/selectors';
import { fetchArticles } from '../../model/services/fetchArticles';
import { articlesPageActions } from '../../model/slices/ArticlesPageSlice';
import { ArticlesSortField } from '../../model/types/articlesPageSchema';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

const orderFieldOptions: SelectOption<ArticlesSortField>[] = [
    { label: 'По количеству просмотров', value: ArticlesSortField.VIEWS },
    { label: 'По названию', value: ArticlesSortField.TITLE },
    { label: 'Дате публикации', value: ArticlesSortField.DATE },
];

const sortOrderOptions: SelectOption<SortOrder>[] = [
    { label: 'По возрастанию', value: SortOrder.ASC },
    { label: 'По убыванию', value: SortOrder.DESC },
];

const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const sortField = useSelector(getArticlesPageSortField);
    const sortOrder = useSelector(getArticlesPageSortOrder);

    const onSortFieldChange = useCallback((newSortField: ArticlesSortField) => {
        dispatch(articlesPageActions.setSortField(newSortField));
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const onSortOrderChange = useCallback((newSortOrder: SortOrder) => {
        dispatch(articlesPageActions.setSortOrder(newSortOrder));
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <Select<ArticlesSortField>
                className={cls.alignCenter}
                label="Сортировать по:"
                options={orderFieldOptions}
                value={sortField}
                onChange={onSortFieldChange}
            />
            <Select<SortOrder>
                className={cls.alignCenter}
                label="Направление сортировки:"
                options={sortOrderOptions}
                value={sortOrder}
                onChange={onSortOrderChange}
            />
        </div>
    );
});

export default ArticlesPageFilters;
