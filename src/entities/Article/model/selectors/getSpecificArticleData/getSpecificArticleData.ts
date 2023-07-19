import { createSelector } from '@reduxjs/toolkit'

import { getSpecificArticleState } from '../getSpecificArticleState/getSpecificArticleState'

export const getSpecificArticleData = createSelector(
  getSpecificArticleState,
  (specificArticle) => specificArticle?.data || undefined
)
