import { ArticleList, ArticleListType } from 'entities/Article';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/selectors';
import { getArticles } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text';

interface ArticlesPageArticlesListProps {
    className?: string;
}

const ArticlesPageArticlesList = memo((props: ArticlesPageArticlesListProps) => {
    const {
        className,
    } = props;
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);

    const { t } = useTranslation();

    if (!articles.length) {
        return <Text text={t('Articles not found')} align={TextAlign.CENTER} />;
    }

    return (
        <ArticleList
            className={className}
            articles={articles}
            view={view as ArticleListType}
        />
    );
});

export default ArticlesPageArticlesList;
