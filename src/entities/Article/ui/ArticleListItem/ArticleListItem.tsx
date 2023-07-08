import { memo } from 'react';
import {
    Article,
    ArticleListType,
} from '../../model/types/article';
import CardItem from './CardItem/CardItem';
import ListItem from './ListItem/ListItem';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleListType;
}

const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;

    if (view === ArticleListType.LIST) {
        return <ListItem className={className} article={article} />;
    }
    return <CardItem className={className} article={article} />;
});

export default ArticleListItem;
