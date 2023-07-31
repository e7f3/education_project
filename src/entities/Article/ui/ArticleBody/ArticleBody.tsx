import { FC, memo, useMemo } from 'react'

import classes from './ArticleBody.module.scss'
import { Article, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
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
          return <ArticleTextBlock block={block} key={block.id} />
        case ArticleBlockType.IMAGE:
          return <ArticleImageBlock block={block} key={block.id} />
        case ArticleBlockType.CODE:
          return <ArticleCodeBlock block={block} key={block.id} />
        default:
          return null
      }
    })
  }, [blocks])

  return <article className={classes.ArticleBody}>{articleBody}</article>
})
