import axios from 'axios'

import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/testHelpers/TestAsynkThunk/TestAsyncThunk'

import { fetchArticlesList } from './fetchArticlesList'

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

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('fetchArticlesList.test', () => {
  test('Successed fetchArticlesList.test', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
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

    thunk.api.get.mockReturnValue(
      Promise.resolve({ data: articlesList.slice(0, 5) })
    )

    const result = await thunk.callThunk({})

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(articlesList.slice(0, 5))
  })

  test('Error while fetchArticlesList.test', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
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

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk({})

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Fetch articles list failed')
  })
})
