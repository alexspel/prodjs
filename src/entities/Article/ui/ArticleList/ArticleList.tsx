import { memo } from 'react';
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

    if (loading) {
        return <div>Loading</div>;
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {
                articles.map(
                    (article) => (
                        <ArticleListItem
                            key={article.id}
                            view={view}
                            article={article}
                        />
                    ),
                )
            }
        </div>
    );
});

export default ArticleList;
