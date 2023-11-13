import { FC, memo } from 'react'

import { ChangeContentOrder } from 'features/ChangeContentOrder'
import { ChangeContentSort } from 'features/ChangeContentSort'
import { ChangeContentView } from 'features/ChangeContentView'
import { SearchContent } from 'features/SearchContent'
import { SelectContentTags } from 'features/SelectContentTags/ui/SelectContentTags'
import { View } from 'shared/const/common'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { isString } from 'shared/lib/utils/isString/isString'
import { ContentOrder, ContentSortBy, ContentTag } from 'shared/types/common'

import classes from './ContentControls.module.scss'

interface ContentControlsProps {
  className?: string

  view?: View
  onViewChange?: (view: View) => void

  search?: string
  onSearchChange?: (search: string) => void

  sort?: ContentSortBy
  onSortChange?: (sort: ContentSortBy) => void

  order?: ContentOrder
  onOrderChange?: (order: ContentOrder) => void
  onSearchClick?: () => void

  tags?: ContentTag[]
  onTagToggle?: (value: string) => void
}

export const ContentControls: FC<ContentControlsProps> = memo((props) => {
  const {
    className,

    view,
    onViewChange,
    search,
    onSearchChange,
    onSearchClick,
    sort,
    onSortChange,
    order,
    onOrderChange,
    tags,
    onTagToggle,
  } = props

  return (
    <div className={classNames(classes.ContentControls, {}, [className])}>
      {view && (
        <ChangeContentView
          className={classes.ViewToggler}
          view={view}
          onViewChange={onViewChange}
        />
      )}
      {sort && (
        <ChangeContentSort
          className={classes.SelectSort}
          sort={sort}
          onSortChange={onSortChange}
        />
      )}
      {order && (
        <ChangeContentOrder
          className={classes.OrderToggler}
          order={order}
          onOrderChange={onOrderChange}
        />
      )}
      {isString(search) && (
        <SearchContent
          className={classes.ContentSearch}
          search={search}
          onChange={onSearchChange}
          onSearchClick={onSearchClick}
        />
      )}
      {tags && <SelectContentTags tags={tags} onTagToggle={onTagToggle} />}
    </div>
  )
})
