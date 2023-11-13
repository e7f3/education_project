import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/utils/classNames/classNames'
import { ContentSortBy } from 'shared/types/common'
import { Select, SelectOption } from 'shared/ui/Select/Select'

import classes from './ChangeContentSort.module.scss'

interface ChangeContentSortProps {
  className?: string
  sort?: ContentSortBy
  onSortChange?: (sort: ContentSortBy) => void
}

const selectOptions: SelectOption<ContentSortBy>[] = [
  {
    value: ContentSortBy.DATE,
    content: 'ContentSortByDate',
  },
  {
    value: ContentSortBy.TITLE,
    content: 'ContentSortByTitle',
  },
  {
    value: ContentSortBy.VIEWS,
    content: 'ContentSortByViews',
  },
]

export const ChangeContentSort: FC<ChangeContentSortProps> = memo((props) => {
  const { className, sort, onSortChange } = props
  const { t } = useTranslation()

  const optionsWithTranslation = useMemo(
    () =>
      selectOptions.map((option) => ({
        ...option,
        content: t(option.content),
      })),
    [t]
  )

  return (
    <div className={classNames(classes.ChangeContentSort, {}, [className])}>
      <Select
        value={sort}
        options={optionsWithTranslation}
        onChange={onSortChange}
      />
    </div>
  )
})
