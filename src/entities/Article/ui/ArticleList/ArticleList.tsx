import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleListType } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleListType;
}

const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleListType.LIST,
    } = props;

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
