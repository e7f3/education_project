import { createSelector } from '@reduxjs/toolkit'

import { getSpecificArticleState } from '../getSpecificArticleState/getSpecificArticleState'

export const getSpecificArticleIsLoading = createSelector(
  getSpecificArticleState,
  (specificArticle) => specificArticle?.isLoading || undefined
)
