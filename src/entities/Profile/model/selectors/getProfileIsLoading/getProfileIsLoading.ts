import { createSelector } from '@reduxjs/toolkit'

import { getProfileState } from '../getProfileState/getProfileState'

export const getProfileIsLoading = createSelector(
  getProfileState,
  (profile) => profile?.isLoading || false
)
