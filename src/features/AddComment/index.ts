export type { NewCommentSchema } from './model/types/NewCommentSchema'

export { AddCommentFormAsync as AddCommentForm } from './ui/AddCommentForm/AddCommentForm.async'
export { getNewCommentText } from './model/selectors/getNewCommentText/getNewCommentText'
export { newCommentActions } from './model/slices/newCommentSlice'
