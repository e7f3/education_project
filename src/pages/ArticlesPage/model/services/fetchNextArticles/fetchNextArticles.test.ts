import axios from 'axios'

import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { fetchNextArticles } from './fetchNextArticles'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

const articlesList = [
  {
    id: '1',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
  {
    id: '5',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
  {
    id: '7',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
  {
    id: '8',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
  {
    id: '9',
    title: 'Nicks boots.',
    subtitle:
      "Exploring the Craftsmanship and Quality of Nick's Boots: Where Tradition Meets Modern Comfort, a Journey into Footwear Excellence.",
    type: ['STYLE', 'HISTORY', 'CRAFTSMANSHIP'],
    image:
      'https://images.squarespace-cdn.com/content/v1/5beb2aef45776e0b962b8773/126bef1f-ac92-4bd9-8d20-da11e2449844/Nicks-Handmade-Boots-Heritage-Header.jpg?format=2500w',
    views: '100',
    createdAt: '09.07.2023',
    userId: '1',
    blocks: [
      {
        id: '1',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
      {
        id: '2',
        type: 'IMAGE',
        title: 'Nicks boots.',
        src: 'https://cdn.nicksboots.com/media/wysiwyg/taskboot-blank-03.jpg',
      },
      {
        id: '3',
        type: 'TEXT',
        title: 'History',
        paragraphs: [
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
          'Nick’s Handmade Boots began in 1964 in Spokane, Washington, with the purpose of building the best work boots possible, from the best leather and materials, and with the idea of earning customers for life. Today no company makes a better work boot than Nicks and we are proud that all of our products are still made in the USA with American materials.',
        ],
      },
    ],
  },
]

jest.mock('../fetchArticlesList/fetchArticlesList')
jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('fetchNextArticles.test', () => {
  test('Successed fetchNextArticles.test', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesList: {
        page: 1,
        ids: [],
        entities: {},
        hasMore: true,
        limit: 5,
        isLoading: false,
        error: undefined,
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 2 })
  })

  test('No more articles fetchNextArticles.test', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesList: {
        page: 1,
        ids: [],
        entities: {},
        hasMore: false,
        limit: 5,
        isLoading: false,
        error: undefined,
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })

  test('Fetch while loading fetchNextArticles.test', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticles, {
      articlesList: {
        page: 1,
        ids: [],
        entities: {},
        hasMore: true,
        limit: 5,
        isLoading: true,
        error: undefined,
      },
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
