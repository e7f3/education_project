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
import { ColoredWith, Icon } from 'shared/ui/Icon/Icon'

import classes from './ChangeContentView.module.scss'

interface ChangeContentViewProps {
  className?: string
  view?: View
  onViewChange?: (view: View) => void
}

const viewTypes = [
  {
    view: View.GRID,
    icon: GridIcon,
    coloredWith: ColoredWith.STROKE,
  },
  {
    view: View.LIST,
    icon: ListIcon,
    coloredWith: ColoredWith.FILL,
  },
]

export const ChangeContentView: FC<ChangeContentViewProps> = memo((props) => {
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
          <Icon
            className={classes.Icon}
            icon={item.icon}
            coloredWith={item.coloredWith}
          />
        </Button>
      ))}
    </div>
  )
})
