import { StateSchema } from 'app/providers/StoreProvider'

export const getScrollPosition = (state: StateSchema) =>
  state.scrollPosition.scrollPosition
