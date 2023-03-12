import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slices/counterSlice'

export const Counter = memo(() => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const value = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid='counter-value'>{value}</h1>
      <button type='button' onClick={increment} data-testid='increment-button'>
        {t('increment')}
      </button>
      <button type='button' onClick={decrement} data-testid='decrement-button'>
        {t('decrement')}
      </button>
    </div>
  )
})
