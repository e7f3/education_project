import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
}

export const StoreProviderDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncRedusers?: ReducersMapObject<StateSchema>
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
