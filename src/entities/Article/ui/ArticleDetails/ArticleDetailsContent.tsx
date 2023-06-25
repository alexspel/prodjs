import { memo, useCallback } from 'react';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import { Text, TextSize } from 'shared/ui/Text';
import { Article, ArticleBlock, ArticleBlockType } from '../../model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsContentProps {
    article: Article;
}

const ArticleDetailsContent = memo((props: ArticleDetailsContentProps) => {
    const {
        article,
    } = props;

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default: return null;
        }
    }, []);

    return (
        <>
            <div className={cls.avatarWrapper}>
                <Avatar
                    size={200}
                    src={article?.img}
                    className={cls.avatar}
                />
            </div>
            <Text
                className={cls.title}
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />
            <div className={cls.articleInfo}>
                <Icon className={cls.icon} Svg={EyeIcon} />
                <Text text={String(article?.views)} />
            </div>
            <div className={cls.articleInfo}>
                <Icon className={cls.icon} Svg={CalendarIcon} />
                <Text text={article?.createdAt} />
            </div>
            {article?.blocks.map(renderBlock)}
        </>
    );
});

export default ArticleDetailsContent;
