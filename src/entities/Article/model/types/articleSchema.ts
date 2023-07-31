import { Article } from './article'

export interface ArticleSchema {
  error?: string
  isLoading: boolean
  data?: Article
}
