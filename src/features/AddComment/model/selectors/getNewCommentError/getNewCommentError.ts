import { StateSchema } from 'app/providers/StoreProvider'

export const getNewCommentError = (state: StateSchema) =>
  state.newComment?.error || undefined
