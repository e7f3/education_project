import { FC, lazy } from 'react'

export const SpecificArticlePageAsync = lazy<FC>(
  () => import('./SpecificArticlePage')
)
