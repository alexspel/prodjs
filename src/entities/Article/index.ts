import {
    getArticleDetails,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
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
    getArticleDetailsLoading,
    getArticleDetailsError,
    articleDetailsActions,
    articleDetailsReducer,
};
