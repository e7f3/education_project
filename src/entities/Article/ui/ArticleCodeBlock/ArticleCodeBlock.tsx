import { FC, memo, useCallback } from 'react'

import { ArticleBlockCode } from 'entities/Article/model/types/article'
import CopyIcon from 'shared/assets/icons/copy.svg'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Button, ButtonTheme, ButtonVariant } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text, TextVariant } from 'shared/ui/Text/Text'

import classes from './ArticleCodeBlock.module.scss'

interface ArticleCodeBlockProps {
  block: ArticleBlockCode
  className?: string
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo((props) => {
  const { block, className } = props
  const { title, code } = block

  const onClick = useCallback(() => {
    navigator.clipboard.writeText(code)
  }, [code])

  return (
    <div
      className={classNames(classes.ArticleCodeBlock, {}, [className])}
      data-testid='article-code-block'
    >
      <code className={classes.Code}>
        <pre>
          <Text variant={TextVariant.PARAGRAPH} content={code} />
        </pre>
      </code>
      {title && (
        <Text
          className={classes.Title}
          variant={TextVariant.CAPTION}
          content={title}
        />
      )}
      <Button
        className={classes.CopyButton}
        variant={ButtonVariant.SQUARE}
        theme={ButtonTheme.CLEAN}
        onClick={onClick}
      >
        <Icon className={classes.ButtonIcon} icon={CopyIcon} />
      </Button>
    </div>
  )
})
