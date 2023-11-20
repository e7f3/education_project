import { createSelector } from '@reduxjs/toolkit'

import { getArticleRecomendationsData } from '../getArticleRecomendationsData/getArticleRecomendationsData'

export const getArticleRecomendationsIsLoading = createSelector(
  getArticleRecomendationsData,
  (articlesRecommendationsData) =>
    articlesRecommendationsData?.isLoading ?? false
)
