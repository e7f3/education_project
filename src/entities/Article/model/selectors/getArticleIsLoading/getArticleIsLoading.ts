import { createSelector } from '@reduxjs/toolkit'

import { getArticleState } from '../getArticleState/getArticleState'

export const getArticleIsLoading = createSelector(
  getArticleState,
  (specificArticle) => specificArticle?.isLoading || undefined
)
