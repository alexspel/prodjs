import { ArticleList, ArticleListType } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader';
import { Text, TextAlign } from 'shared/ui/Text';
import {
    getArticlesPageInited,
    getArticlesPageLoading,
    getArticlesPageView,
} from '../../model/selectors/selectors';
import { getArticles } from '../../model/slices/ArticlesPageSlice';
import cls from './ArticlesPageArticlesList.module.scss';

interface ArticlesPageArticlesListProps {
    className?: string;
}

const ArticlesPageArticlesList = memo((props: ArticlesPageArticlesListProps) => {
    const {
        className,
    } = props;
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const loading = useSelector(getArticlesPageLoading);
    const inited = useSelector(getArticlesPageInited);

    const { t } = useTranslation();

    if (inited && !loading && !articles.length) {
        return <Text text={t('Articles not found')} align={TextAlign.CENTER} />;
    }

    return (
        <>
            <ArticleList
                className={className}
                articles={articles}
                view={view as ArticleListType}
            />
            {
                (loading || !inited) && (
                    <div className={cls.loader}>
                        <Loader />
                    </div>
                )
            }
        </>
    );
});

export default ArticlesPageArticlesList;
