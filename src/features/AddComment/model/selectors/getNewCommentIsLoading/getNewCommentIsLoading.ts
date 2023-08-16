import { StateSchema } from 'app/providers/StoreProvider'

export const getNewCommentIsLoading = (state: StateSchema) =>
  state.newComment?.isLoading || false
