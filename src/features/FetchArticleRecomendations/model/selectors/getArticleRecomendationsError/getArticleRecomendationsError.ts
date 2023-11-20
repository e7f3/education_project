import { createSelector } from '@reduxjs/toolkit'

import { getArticleRecomendationsData } from '../getArticleRecomendationsData/getArticleRecomendationsData'

export const getArticleRecomendationsError = createSelector(
  getArticleRecomendationsData,
  (articlesRecommendationsData) =>
    articlesRecommendationsData?.error ?? undefined
)
