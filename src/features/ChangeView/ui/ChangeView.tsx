import { FC, memo, useCallback } from 'react'

import GridIcon from 'shared/assets/icons/article-view_grid.svg'
import ListIcon from 'shared/assets/icons/article-view_list.svg'
import { View } from 'shared/const/common'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import {
  Button,
  ButtonSize,
  ButtonTheme,
  ButtonVariant,
} from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

import classes from './ChangeView.module.scss'

interface ChangeViewProps {
  className?: string
  view?: View
  onViewChange?: (view: View) => void
}

const viewTypes = [
  {
    view: View.GRID,
    icon: GridIcon,
  },
  {
    view: View.LIST,
    icon: ListIcon,
  },
]

export const ChangeView: FC<ChangeViewProps> = memo((props) => {
  const { className, view = View.GRID, onViewChange } = props

  const onClick = useCallback(() => {
    if (onViewChange) {
      onViewChange(view === View.GRID ? View.LIST : View.GRID)
    }
  }, [onViewChange, view])

  return (
    <div className={classNames(classes.ChangeView, {}, [className])}>
      {viewTypes.map((item) => (
        <Button
          variant={ButtonVariant.SQUARE}
          theme={view === item.view ? ButtonTheme.DEFAULT : ButtonTheme.CLEAN}
          size={ButtonSize.L}
          onClick={onClick}
          key={item.view}
        >
          <Icon icon={item.icon} />
        </Button>
      ))}
    </div>
  )
})
