import { createSelector } from '@reduxjs/toolkit'

import { getArticleState } from '../getArticleState/getArticleState'

export const getArticleError = createSelector(
  getArticleState,
  (specificArticle) => specificArticle?.error || undefined
)
