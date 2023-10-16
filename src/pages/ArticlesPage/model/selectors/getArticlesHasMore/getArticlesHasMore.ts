import { createSelector } from '@reduxjs/toolkit'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesHasMore = createSelector(
  getArticlesData,
  (articlesData) => articlesData?.hasMore ?? true
)
