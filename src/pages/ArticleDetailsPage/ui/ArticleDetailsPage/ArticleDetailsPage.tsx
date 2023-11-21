import { ArticleDetails } from 'entities/Article';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Text, TextTheme } from 'shared/ui/Text';
import { Page } from 'widgets/Page';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer } from '../../model/slice/ArticleDetailsCommentsSlice';
import ArticleDetailsPageComments from '../ArticleDetailsPageComments/ArticleDetailsPageComments';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
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
            <Page>
                <ArticleDetailsPageHeader />
                <ArticleDetails
                    articleId={id}
                />
                <ArticleDetailsPageComments articleId={id} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
