import { EntityState } from '@reduxjs/toolkit'

import { Article } from 'entities/Article'
import { View } from 'shared/const/common'

export interface ArticlesPageSchema extends EntityState<Article> {
  error?: string
  isLoading: boolean
  view: View
}
