import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'

import { StateShema, StoreProvider } from 'app/providers/StoreProvider'

export const ProviderDecorator = (initialState: DeepPartial<StateShema>) => {
  return (StoryComponent: Story) => {
    return (
      <StoreProvider initialState={initialState as StateShema}>
        <StoryComponent />
      </StoreProvider>
    )
  }
}
