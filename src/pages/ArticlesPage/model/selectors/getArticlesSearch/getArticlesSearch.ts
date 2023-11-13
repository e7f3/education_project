import { createSelector } from '@reduxjs/toolkit'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesSearch = createSelector(
  getArticlesData,
  (articlesData) => articlesData?.search ?? ''
)
