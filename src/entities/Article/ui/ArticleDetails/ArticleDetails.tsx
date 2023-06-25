import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Text, TextTheme } from 'shared/ui/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors';
import { fetchArticleById } from '../../model/services';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { Article } from '../../model/types/article';
import cls from './ArticleDetails.module.scss';
import ArticleDetailsContent from './ArticleDetailsContent';
import ArticleDetailsSkeleton from './ArticleDetailsSkeleton';

interface ArticleDetailsProps {
    className?: string;
    articleId: string;
}

const reducersList: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();
    let content = null;

    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const loading = useSelector(getArticleDetailsLoading);

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    if (loading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={t('Error')}
                text={t('Article not found')}
            />
        );
    } else {
        content = (
            <ArticleDetailsContent
                article={article as Article}
            />
        );
    }
    return (
        <DynamicModuleLoader reducers={reducersList} autoRemoveReducer>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetails;
