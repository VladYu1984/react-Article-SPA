import { ArticleDetailsComentsSchema } from "./ArticleDetailsComentsSchema";
import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationsSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsComentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
