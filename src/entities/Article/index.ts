import {
    getArticleDetails,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './model/selectors';

import { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';
import { Article } from './model/types/article';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';

export {
    Article,
    ArticleDetails,
    ArticleDetailsSchema,
    getArticleDetails,
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
    articleDetailsActions,
    articleDetailsReducer,
};

