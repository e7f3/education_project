import { FC, memo } from 'react'

import { ChangeView } from 'features/ChangeView'
import { View } from 'shared/const/common'

import classes from './ContentControls.module.scss'

interface ContentControlsProps {
  view?: View
  onViewChange?: (view: View) => void
}

export const ContentControls: FC<ContentControlsProps> = memo((props) => {
  const { view, onViewChange } = props
  return (
    <div className={classes.ContentControls}>
      <ChangeView
        className={classes.ViewToggler}
        view={view}
        onViewChange={onViewChange}
      />
    </div>
  )
})
