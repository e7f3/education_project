import { createSelector } from '@reduxjs/toolkit'

import { View } from 'shared/const/common'

import { getArticlesData } from '../getArticlesData/getArticlesData'

export const getArticlesView = createSelector(
  getArticlesData,
  (articlesData) => articlesData?.view || View.LIST
)
