import { createSelector } from '@reduxjs/toolkit'

import { getSpecificArticleState } from '../getSpecificArticleState/getSpecificArticleState'

export const getSpecificArticleError = createSelector(
  getSpecificArticleState,
  (specificArticle) => specificArticle?.error || undefined
)
