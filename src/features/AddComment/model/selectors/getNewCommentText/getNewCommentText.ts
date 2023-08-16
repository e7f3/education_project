import { StateSchema } from 'app/providers/StoreProvider'

export const getNewCommentText = (state: StateSchema) =>
  state.newComment?.text || undefined
