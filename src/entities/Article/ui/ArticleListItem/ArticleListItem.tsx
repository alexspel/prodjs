import { memo } from 'react';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import StarIcon from 'shared/assets/icons/star.svg';
import { RoutePath } from 'shared/config/AppRouter/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon';
import { Text, TextSize } from 'shared/ui/Text';
import {
    Article, ArticleBlockType, ArticleListType, ArticleTextBlock,
} from '../../model/types/article';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

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
        const textBlock = article.blocks.find((x) => x.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                {article?.user && (
                    <AppLink
                        to={`${RoutePath.article_details}${article.id}`}
                        underline={false}
                    >
                        <div className={cls.header}>
                            <Avatar
                                size={30}
                                src={article.user.avatar}
                            />
                            <Text
                                text={article.user.username}
                                className={cls.username}
                            />
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                        </div>
                    </AppLink>
                )}
                <AppLink
                    to={`${RoutePath.article_details}${article.id}`}
                    underline={false}
                >
                    <div className={cls.title}>
                        <Text
                            size={TextSize.L}
                            text={article.title}
                        />
                    </div>
                </AppLink>
                {textBlock && (
                    <ArticleTextBlockComponent block={textBlock} />)}
                <div className={cls.postInfoWrapper}>
                    <AppLink
                        to={`${RoutePath.article_details}${article.id}`}
                        underline={false}
                    >
                        <div className={cls.postInfo}>
                            <Icon
                                Svg={EyeIcon}
                            />
                            <Text
                                size={TextSize.S}
                                text={String(article.views)}
                            />
                        </div>
                    </AppLink>
                    <AppLink
                        to={`${RoutePath.article_details}${article.id}`}
                        underline={false}
                    >
                        <div className={cls.postInfo}>
                            <Icon
                                Svg={StarIcon}
                            />
                            <Text
                                size={TextSize.S}
                                text={String(article.blocks.length)}
                            />
                        </div>
                    </AppLink>
                </div>
            </div>
        );
    }
    return (
        <Card
            image={article.img}
            title={(
                <div className={cls.CardTitle}>
                    <div>
                        {article.type.join(', ')}
                    </div>
                    <div>
                        {article.views}
                    </div>
                </div>
            )}
            subtitle={article.title}
        />
    );
});

export default ArticleListItem;
