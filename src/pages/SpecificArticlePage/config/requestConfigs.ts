import { AxiosRequestConfig } from 'axios'

export const createFetchArticleCommentsConfig = (
  articleId: string
): AxiosRequestConfig => ({
  params: {
    articleId,
    _expand: 'user',
  },
})
