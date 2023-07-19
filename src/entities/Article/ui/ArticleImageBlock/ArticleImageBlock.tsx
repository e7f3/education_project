import { FC, memo } from 'react'

import { ArticleBlockImage } from 'entities/Article/model/types/article'
import { Text } from 'shared/ui/Text/Text'

import classes from './ArticleImageBlock.module.scss'

interface ArticleImageBlockProps {
  src: string
  title?: string
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo((props) => {
  const { src, title } = props
  return (
    <section className={classes.ArticleImageBlock}>
      <img className={classes.Image} src={src} alt={title} />
      {title && <Text className={classes.Description} content={title} />}
    </section>
  )
})
