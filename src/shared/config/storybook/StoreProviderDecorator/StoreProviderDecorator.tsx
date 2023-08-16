import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleReducer } from 'entities/Article/model/slices/articleSlice'
import { profileReducer } from 'entities/Profile'
import { newCommentReducer } from 'features/AddComment/model/slices/newCommentSlice'
import { loginReducer } from 'features/AuthByUsername'
import { commentsReducer } from 'features/FetchComments'
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  comments: commentsReducer,
  newComment: newCommentReducer,
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
