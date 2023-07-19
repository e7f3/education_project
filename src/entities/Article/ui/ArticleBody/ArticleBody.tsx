import { FC, memo, useMemo } from 'react'

import classes from './ArticleBody.module.scss'
import { Article, ArticleBlockType } from '../../model/types/article'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'

interface ArticleBodyProps {
  data: Article
}

export const ArticleBody: FC<ArticleBodyProps> = memo((props) => {
  const { data } = props
  const { blocks } = data

  const articleBody = useMemo(() => {
    return blocks.map((block) => {
      switch (block.type) {
        case ArticleBlockType.TEXT:
          return (
            <ArticleTextBlock
              title={block.title}
              paragraphs={block.paragraphs}
              key={block.id}
            />
          )
        case ArticleBlockType.IMAGE:
          return (
            <ArticleImageBlock
              title={block.title}
              src={block.src}
              key={block.id}
            />
          )
        default:
          return null
      }
    })
  }, [blocks])

  return <article className={classes.ArticleBody}>{articleBody}</article>
})
