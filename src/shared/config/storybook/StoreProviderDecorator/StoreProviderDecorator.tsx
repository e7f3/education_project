import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleReducer } from 'entities/Article/model/slices/articleSlice'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername'
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  article: articleReducer,
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
