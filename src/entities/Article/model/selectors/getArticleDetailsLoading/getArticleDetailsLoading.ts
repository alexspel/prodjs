import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsLoading = (state: StateSchema) => state?.articleDetails?.loading || false;
