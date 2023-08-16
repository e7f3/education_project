import { AsyncThunk } from '@reduxjs/toolkit'
import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ThunkApiConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { Textarea } from 'shared/ui/Textarea/Textarea'

import classes from './AddCommentForm.module.scss'
import { getNewCommentText } from '../../model/selectors/getNewCommentText/getNewCommentText'
import {
  newCommentActions,
  newCommentReducer,
} from '../../model/slices/newCommentSlice'

export interface AddCommentFormProps {
  onSend: AsyncThunk<Comment, void, ThunkApiConfig<string>>
}

const reducers: ReducersList = {
  newComment: newCommentReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
  const { onSend } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const text = useSelector(getNewCommentText)
  const [showArea, setShowArea] = useState<boolean>(false)

  const onClickAddComment = useCallback(() => {
    setShowArea(true)
  }, [])

  const onChange = useCallback(
    (value: string) => {
      dispatch(newCommentActions.setComment(value))
    },
    [dispatch]
  )

  const onClickSend = useCallback(async () => {
    const response = dispatch(onSend())
  }, [dispatch, onSend])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={classes.AddCommentForm} data-testid='add-comment'>
        <Textarea
          className={classes.Textarea}
          value={text}
          onChange={onChange}
        />
        <Button className={classes.Button} type='button' onClick={onClickSend}>
          {t('Send')}
        </Button>
      </div>
    </DynamicReducerLoader>
  )
})

export default AddCommentForm
