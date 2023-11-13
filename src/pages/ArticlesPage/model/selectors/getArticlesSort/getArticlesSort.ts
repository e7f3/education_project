import { createSelector } from '@reduxjs/toolkit'

import { ContentSortBy } from 'shared/types/common'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesSort = createSelector(
  getArticlesData,
  (articlesData) => articlesData?.sort || ContentSortBy.DATE
)
