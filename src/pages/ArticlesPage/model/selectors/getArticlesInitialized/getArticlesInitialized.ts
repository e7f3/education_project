import { createSelector } from '@reduxjs/toolkit'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesInitialized = createSelector(
  getArticlesData,
  (articlesData) => articlesData?._initialized ?? false
)
