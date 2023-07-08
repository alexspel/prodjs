import { Article } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { RoutePath } from 'shared/config/AppRouter/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Card } from 'shared/ui/Card';
import cls from './CardItem.module.scss';

interface CardItemProps {
    className?: string;
    article: Article;
}

const CardItem = memo((props: CardItemProps) => {
    const {
        className,
        article,
    } = props;

    return (
        <AppLink
            to={`${RoutePath.article_details}${article.id}`}
            underline={false}
        >
            <Card
                className={classNames(cls.CardItem, {}, [className])}
                image={article.img}
                title={(
                    <div className={classNames('', {}, [cls.title])}>
                        <span
                            className={classNames('', {}, [cls.hideableText])}
                        >
                            {article.type.join(', ')}
                        </span>
                        <span
                            className={classNames('', {}, [cls.hideableText])}
                        >
                            {article.views}
                        </span>
                    </div>
                )}
                subtitle={(
                    <div className={classNames('', {}, [cls.subtitle, cls.hideableText])}>
                        {article.title}
                    </div>
                )}
            />
        </AppLink>
    );
});

export default CardItem;
