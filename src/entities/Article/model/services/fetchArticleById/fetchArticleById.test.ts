import axios from 'axios'

import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { fetchArticleById } from './fetchArticleById'
import { Article, ArticleBlockType, ArticleType } from '../../types/article'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

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

const CORRECT_ARTICLE_ID = '1'
const INVALID_ARTICLE_ID = '10'

describe('fetchArticleById.test', () => {
  test('Successed fetch fetchArticleById.test', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)

    thunk.api.get.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk(CORRECT_ARTICLE_ID)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(data)
  })

  test('Fetch error fetchArticleById.test', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(INVALID_ARTICLE_ID)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('fetchArticleById error')
  })
})
