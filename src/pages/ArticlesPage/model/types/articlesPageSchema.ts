import { EntityState } from '@reduxjs/toolkit'

import { Article } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  error?: string
  isLoading: boolean
}
