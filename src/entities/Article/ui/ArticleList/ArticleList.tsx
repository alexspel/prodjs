import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleListType } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleListType;
    loading?: boolean;
}

const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        loading = false,
        view = ArticleListType.LIST,
    } = props;

    const { t } = useTranslation();

    if (loading) {
        return <div>Loading</div>;
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {
                articles.map((article) => (
                    <ArticleListItem
                        key={article.id}
                        view={view}
                        article={article}
                    />
                ))
            }
        </div>
    );
});

export default ArticleList;
