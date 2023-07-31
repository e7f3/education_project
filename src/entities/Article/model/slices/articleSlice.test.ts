import { articleReducer } from './articleSlice'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { Article, ArticleBlockType, ArticleType } from '../types/article'
import { ArticleSchema } from '../types/articleSchema'

const data: Article = {
  id: '1',
  title: 'Nicks boots.',
  subtitle: 'Why do I love them.',
  type: [ArticleType.STYLE, ArticleType.HISTORY, ArticleType.CRAFTSMANSHIP],
  image:
    'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
  views: 100,
  createdAt: '09.07.2023',
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'History',
      paragraphs: [
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      title: 'Nicks boots.',
      src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'History',
      paragraphs: [
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
      ],
    },
  ],
}

describe('articleSlice.test', () => {
  test('extraReducers fetchArticleById.pending profileSlice.test', () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: false,
    }

    expect(
      articleReducer(state as ArticleSchema, fetchArticleById.pending)
    ).toEqual({ isLoading: true })
  })

  test('extraReducers fetchArticleById.fullfilled profileSlice.test', () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: true,
    }

    expect(
      articleReducer(
        state as ArticleSchema,
        fetchArticleById.fulfilled(data, '1', '')
      )
    ).toEqual({ isLoading: false, data })
  })

  test('extraReducers fetchArticleById.rejected profileSlice.test', () => {
    const state: DeepPartial<ArticleSchema> = {
      isLoading: true,
    }

    expect(
      articleReducer(
        state as ArticleSchema,
        fetchArticleById.rejected(new Error(), '', '')
      )
    ).toEqual({ isLoading: false })
  })
})
