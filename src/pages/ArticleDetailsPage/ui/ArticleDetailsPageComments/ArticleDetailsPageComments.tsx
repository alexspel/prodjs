import { CommentList } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import AddNewCommentForm from 'features/AddNewComment/ui/AddNewCommentForm/AddNewCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks';
import { Text } from 'shared/ui/Text';
import { getArticleDetailsCommentsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slice/ArticleDetailsCommentsSlice';
import cls from './ArticleDetailsPageComments.module.scss';

interface ArticleDetailsPageCommentsProps {
    className?: string;
    articleId?: string;
}
const ArticleDetailsPageComments = memo((props: ArticleDetailsPageCommentsProps) => {
    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const user = useSelector(getUserAuthData);
    const commentsLoading = useSelector(getArticleDetailsCommentsLoading);
    const comments = useSelector(getArticleComments.selectAll);

    const onSendComment = useCallback((comment: string) => {
        if (articleId) {
            dispatch(addCommentForArticle({ articleId, text: comment }));
        }
    }, [dispatch, articleId]);

    return (
        <div className={classNames(cls.ArticleDetailsPageComments, {}, [className])}>
            <Text text={t('Comments')} />
            {user?.id && (
                <AddNewCommentForm
                    onSendComment={onSendComment}
                />
            )}
            <CommentList
                loading={commentsLoading}
                comments={comments}
            />
        </div>
    );
});

export default ArticleDetailsPageComments;
