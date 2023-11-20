import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleRecomendationsData = (state: StateSchema) =>
  state.articleRecomendations
