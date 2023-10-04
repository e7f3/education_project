import { StateSchema } from 'app/providers/StoreProvider'
import { View } from 'shared/const/common'

export const getArticlesView = (state: StateSchema) =>
  state.articlesList?.view || View.LIST
