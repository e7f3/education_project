import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import SearchIcon from 'shared/assets/icons/find.svg'
import { classNames } from 'shared/lib/utils/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { ColoredWith, Icon } from 'shared/ui/Icon/Icon'
import { Input } from 'shared/ui/Input/Input'

import classes from './SearchContent.module.scss'

interface SearchContentProps {
  className?: string
  search?: string
  onChange?: (search: string) => void
  onSearchClick?: () => void
}

export const SearchContent: FC<SearchContentProps> = memo((props) => {
  const { className, search, onChange, onSearchClick } = props
  const { t } = useTranslation()
  return (
    <div
      className={classNames(classes.SearchContent, {}, [className])}
      data-testid='search-content'
    >
      <Input
        className={classes.SearchInput}
        value={search}
        onChange={onChange}
      />
      <Button className={classes.SearchButton} onClick={onSearchClick}>
        <Icon icon={SearchIcon} coloredWith={ColoredWith.FILL} />
      </Button>
    </div>
  )
})
