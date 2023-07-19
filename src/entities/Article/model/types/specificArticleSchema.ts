import { Article } from './article'

export interface SpecificArticleSchema {
  error?: string
  isLoading: boolean
  data?: Article
}
