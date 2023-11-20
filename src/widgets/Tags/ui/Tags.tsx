import { FC, memo } from 'react'

import classes from './Tags.module.scss'
import { Text, TextVariant } from '../../../shared/ui/Text/Text'

export enum TagSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface TagsProps {
  tags?: string[]
  size?: TagSize
}

export const Tags: FC<TagsProps> = memo((props) => {
  const { tags = [], size = TagSize.MEDIUM } = props

  let textVariant: TextVariant
  switch (size) {
    case TagSize.SMALL:
      textVariant = TextVariant.CAPTION
      break
    case TagSize.MEDIUM:
      textVariant = TextVariant.PARAGRAPH
      break
    case TagSize.LARGE:
      textVariant = TextVariant.SUBTITLE
      break
    default:
      textVariant = TextVariant.PARAGRAPH
  }

  if (!tags.length) {
    return null
  }

  return (
    <ul className={classes.Tags}>
      {tags.map((tag) => (
        <li className={classes.Tag} key={tag}>
          <Text content={tag} variant={textVariant} />
        </li>
      ))}
    </ul>
  )
})
