import { StateSchema } from 'app/providers/StoreProvider'

export const getCommentsError = (state: StateSchema) =>
  state.comments?.error || undefined
