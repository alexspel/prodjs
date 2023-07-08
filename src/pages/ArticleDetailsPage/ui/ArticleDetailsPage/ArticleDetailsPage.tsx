import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment/ui';
import { getUserAuthData } from 'entities/User';
import AddNewCommentForm from 'features/AddNewComment/ui/AddNewCommentForm/AddNewCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/AppRouter/AppRouter';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { Page } from 'widgets/Page';
import { getArticleDetailsCommentsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/ArticleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useSelector(getUserAuthData);
    const commentsLoading = useSelector(getArticleDetailsCommentsLoading);
    const comments = useSelector(getArticleComments.selectAll);

    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((comment: string) => {
        if (id) {
            dispatch(addCommentForArticle({ articleId: id, text: comment }));
        }
    }, [dispatch, id]);

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
            <Page>
                <div className={cls.header}>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onBackToArticles}
                    >
                        {t('Back')}
                    </Button>
                </div>
                <ArticleDetails
                    articleId={id}
                />
                <div className={cls.comments}>
                    <Text text={t('Comments')} />
                    {user && user?.id && (
                        <AddNewCommentForm
                            onSendComment={onSendComment}
                        />
                    )}
                    <CommentList
                        loading={commentsLoading}
                        comments={comments}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
