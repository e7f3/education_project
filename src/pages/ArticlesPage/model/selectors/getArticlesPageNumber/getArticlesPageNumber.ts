import { createSelector } from '@reduxjs/toolkit'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesPageNumber = createSelector(
  getArticlesData,
  (articlesData) => articlesData?.page || 1
)
