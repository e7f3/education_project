import { createSelector } from '@reduxjs/toolkit'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesLimit = createSelector(
  getArticlesData,
  (articlesData) => articlesData?.limit || 5
)
