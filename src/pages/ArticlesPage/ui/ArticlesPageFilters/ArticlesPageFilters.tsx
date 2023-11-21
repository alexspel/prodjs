import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'entities/SortOrder';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks';
import { Select, SelectOption } from 'shared/ui/Select';
import { getArticlesPageSortField, getArticlesPageSortOrder } from '../../model/selectors/selectors';
import { fetchArticles } from '../../model/services/fetchArticles';
import { articlesPageActions } from '../../model/slices/ArticlesPageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

const orderFieldOptions: SelectOption<ArticleSortField>[] = [
    { label: 'По количеству просмотров', value: ArticleSortField.VIEWS },
    { label: 'По названию', value: ArticleSortField.TITLE },
    { label: 'Дате публикации', value: ArticleSortField.DATE },
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

    const onSortFieldChange = useCallback((newSortField: ArticleSortField) => {
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
            <Select<ArticleSortField>
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
