import { ChangeEvent, FC, MouseEvent, useCallback, useMemo } from 'react'

import { classNames } from 'shared/lib/utils/classNames/classNames'
import { ContentTag } from 'shared/types/common'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './SelectContentTags.module.scss'

interface SelectContentTagsProps {
  className?: string
  tags: ContentTag[]
  onTagToggle?: (value: string) => void
}

export const SelectContentTags: FC<SelectContentTagsProps> = (props) => {
  const { className, tags, onTagToggle = () => {} } = props

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onTagToggle(event.target.value)
    },
    [onTagToggle]
  )

  return (
    <div className={classNames(classes.SelectContentTags, {}, [className])}>
      <ul className={classes.Tags}>
        {tags.map((tag) => (
          <li className={classes.TagWrapper} key={tag.value}>
            <input
              type='checkbox'
              name='content-tags'
              id={tag.value}
              className={classes.TagCheckbox}
              onChange={onChange}
              value={tag.value}
              checked={tag.selected}
            />
            <label htmlFor={tag.value} className={classes.TagLabel}>
              <Text variant={TextVariant.PARAGRAPH} content={tag.content} />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
