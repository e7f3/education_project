import { createSelector } from '@reduxjs/toolkit'

import { getUser } from '../getUser/getUser'

export const getUserInitialized = createSelector(
  getUser,
  (user) => user._initialized
)
