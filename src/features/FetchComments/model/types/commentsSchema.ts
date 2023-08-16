import { EntityState } from '@reduxjs/toolkit'

import { Comment } from 'entities/Comment'

export interface CommentsSchema extends EntityState<Comment> {
  error?: string
  isLoading: boolean
}
