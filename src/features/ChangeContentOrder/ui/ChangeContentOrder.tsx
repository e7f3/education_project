import { FC, memo, useCallback } from 'react'

import OrderIcon from 'shared/assets/icons/order.svg'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { ContentOrder } from 'shared/types/common'
import {
  Button,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
} from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

import classes from './ChangeContentOrder.module.scss'

interface ChangeContentOrderProps {
  className?: string
  order?: ContentOrder
  onOrderChange?: (order: ContentOrder) => void
}

export const ChangeContentOrder: FC<ChangeContentOrderProps> = memo((props) => {
  const { className, order, onOrderChange } = props

  const onClick = useCallback(() => {
    if (onOrderChange) {
      onOrderChange(
        order === ContentOrder.ASC ? ContentOrder.DESC : ContentOrder.ASC
      )
    }
  }, [onOrderChange, order])

  return (
    <div
      className={classNames(classes.ChangeContentOrder, {}, [className])}
      data-testid='change-order'
    >
      <Button
        theme={
          order === ContentOrder.DESC ? ButtonTheme.DEFAULT : ButtonTheme.CLEAN
        }
        variant={ButtonVariant.SQUARE}
        size={ButtonSize.L}
        onClick={onClick}
      >
        <Icon className={classes.MirroredIcon} icon={OrderIcon} />
      </Button>
      <Button
        theme={
          order === ContentOrder.ASC ? ButtonTheme.DEFAULT : ButtonTheme.CLEAN
        }
        variant={ButtonVariant.SQUARE}
        size={ButtonSize.L}
        onClick={onClick}
      >
        <Icon icon={OrderIcon} />
      </Button>
    </div>
  )
})
