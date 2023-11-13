import { createSelector } from '@reduxjs/toolkit'

import { ArticleType } from 'entities/Article'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesTypes = createSelector(
  getArticlesData,
  (articlesData) =>
    articlesData?.types ??
    Object.entries(ArticleType).reduce(
      (acc, [key]) => ({ ...acc, [key]: true }),
      {} as Record<ArticleType, boolean>
    )
)
