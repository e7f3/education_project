import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername'
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
}

export const StoreProviderDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncRedusers?: ReducersList
) => {
  return (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncRedusers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
}
