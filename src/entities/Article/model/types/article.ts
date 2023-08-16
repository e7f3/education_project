export interface Article {
  id: string
  title: string
  subtitle: string
  type: ArticleType[]
  image: string
  views: number
  createdAt: string
  blocks: ArticleBlock[]
}

export enum ArticleType {
  'NEWS' = 'NEWS',
  'STYLE' = 'STYLE',
  'CRAFTSMANSHIP' = 'CRAFTSMANSHIP',
  'CULTURE' = 'CULTURE',
  'PEOPLE' = 'PEOPLE',
  'HISTORY' = 'HISTORY',
  'TRAVEL' = 'TRAVEL',
}

export type ArticleBlock =
  | ArticleBlockText
  | ArticleBlockImage
  | ArticleBlockCode

export interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  title?: string
  src: string
}

export interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  title?: string
  code: string
}

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export enum ArticleBlockType {
  'TEXT' = 'TEXT',
  'IMAGE' = 'IMAGE',
  'CODE' = 'CODE',
}
