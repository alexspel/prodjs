import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment/ui';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const [loading] = useState(true);

    if (!id) {
        return (
            <Text
                theme={TextTheme.ERROR}
                title={t('Error')}
                text={t('Article not found')}
            />
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails
                articleId={id}
            />
            <div className={cls.comments}>
                <Text
                    text={t('Comments')}
                />
                <CommentList
                    comments={
                        [
                            { id: '1', user: { id: '1', username: '1', avatar: '1' }, text: '1234' },
                        ]
                    }
                    loading={loading}
                />
            </div>
        </div>
    );
});

export default ArticleDetailsPage;
