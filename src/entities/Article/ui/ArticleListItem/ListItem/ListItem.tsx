import { memo } from 'react';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import StarIcon from 'shared/assets/icons/star.svg';
import { RoutePath } from 'shared/config/AppRouter/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import { Text, TextSize } from 'shared/ui/Text';
import { Article, ArticleBlockType, ArticleTextBlock } from '../../../model/types/article';
import ArticleTextBlockComponent from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ListItem.module.scss';

interface ListItemProps {
    article: Article;
    className?: string;
}

const ListItem = memo((props: ListItemProps) => {
    const {
        article,
        className,
    } = props;
    const textBlock = article.blocks.find((x) => x.type === ArticleBlockType.TEXT) as ArticleTextBlock;
    return (
        <div className={classNames(cls.ListItem, {}, [className])}>
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
                            text={String(article.blocks.length)}
                        />
                    </div>
                </AppLink>
            </div>
        </div>
    );
});

export default ListItem;
