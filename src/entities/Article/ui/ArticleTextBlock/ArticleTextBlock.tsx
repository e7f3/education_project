import { FC, memo, useMemo } from 'react'

import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './ArticleTextBlock.module.scss'

interface ArticleTextBlockProps {
  paragraphs: string[]
  title?: string
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props) => {
  const { title, paragraphs } = props

  const paragraphsJSX = useMemo(() => {
    return paragraphs.map((paragraph) => {
      return (
        <Text
          className={classes.Paragraph}
          content={paragraph}
          key={paragraph}
        />
      )
    })
  }, [paragraphs])

  return (
    <section className={classes.ArticleTextBlock}>
      {title && (
        <Text
          className={classes.Title}
          content={title}
          variant={TextVariant.TITLE}
        />
      )}
      <div className={classes.Paragraphs}>{paragraphsJSX}</div>
    </section>
  )
})
