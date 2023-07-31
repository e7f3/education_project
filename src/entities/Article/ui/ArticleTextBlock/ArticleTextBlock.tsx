import { FC, memo, useMemo } from 'react'

import { ArticleBlockText } from 'entities/Article/model/types/article'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './ArticleTextBlock.module.scss'

interface ArticleTextBlockProps {
  block: ArticleBlockText
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props) => {
  const { block } = props
  const { title, paragraphs } = block

  const paragraphsJSX = useMemo(() => {
    return paragraphs.map((paragraph, index) => {
      const key = `${paragraph}-${index}`
      return (
        <Text className={classes.Paragraph} content={paragraph} key={key} />
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
