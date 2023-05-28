import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment/ui';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Text, TextTheme } from 'shared/ui/Text';
import { getArticleDetailsCommentsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/ArticleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const commentsLoading = useSelector(getArticleDetailsCommentsLoading);
    const comments = useSelector(getArticleComments.selectAll);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

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
        <DynamicModuleLoader
            reducers={reducers}
            autoRemoveReducer
        >
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails
                    articleId={id}
                />
                <div className={cls.comments}>
                    <Text
                        text={t('Comments')}
                    />
                    <CommentList
                        loading={commentsLoading}
                        comments={comments}
                    />
                </div>
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
