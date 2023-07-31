import { User } from 'entities/User'

export interface Comment {
  id: string
  user: User
  text: string
  date: string
}

export interface CommentSchema {
  comment?: Comment
  isLoading: boolean
  error?: string
}
