import { createSelector } from '@reduxjs/toolkit'

import { ContentOrder } from 'shared/types/common'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesOrder = createSelector(
  getArticlesData,
  (articlesData) => articlesData?.order || ContentOrder.ASC
)
