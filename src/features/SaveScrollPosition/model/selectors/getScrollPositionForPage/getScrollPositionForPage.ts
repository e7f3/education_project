import { createSelector } from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'

import { getScrollPosition } from '../getScrollPosition/getScrollPosition'

export const getScrollPositionForPage = createSelector(
  getScrollPosition,
  (state: StateSchema, pathname: string) => pathname,
  (scrollPosition, pathname) => scrollPosition[pathname] || 0
)
