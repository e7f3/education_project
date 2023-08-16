import { StateSchema } from 'app/providers/StoreProvider'

export const getCommentsIsLoading = (state: StateSchema) =>
  state.comments?.isLoading || false
