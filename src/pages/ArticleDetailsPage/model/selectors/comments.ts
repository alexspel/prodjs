import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsLoading = (state: StateSchema) => state.articleDetailsComments?.loading;
export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
