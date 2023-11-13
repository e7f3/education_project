export enum ContentOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum ContentSortBy {
  DATE = 'createdAt',
  TITLE = 'title',
  VIEWS = 'views',
}

export interface ContentTag {
  value: string
  content: string
  selected: boolean
}
