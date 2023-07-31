import { createSelector } from '@reduxjs/toolkit'

import { getArticleState } from '../getArticleState/getArticleState'

export const getArticleData = createSelector(
  getArticleState,
  (specificArticle) => specificArticle?.data || undefined
)
