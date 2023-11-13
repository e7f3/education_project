import { EntityState } from '@reduxjs/toolkit'

import { Article } from 'entities/Article'
import { ArticleType } from 'entities/Article/model/types/article'
import { View } from 'shared/const/common'
import { ContentOrder, ContentSortBy } from 'shared/types/common'

export interface ArticlesPageSchema extends EntityState<Article> {
  error?: string
  isLoading: boolean

  // Pagination
  page: number
  limit: number
  hasMore: boolean
  _initialized: boolean

  // Content control
  view: View
  search: string
  order: ContentOrder
  sort: ContentSortBy
  types: Record<ArticleType, boolean>
}
