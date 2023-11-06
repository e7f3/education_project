import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ScrollPositionSchema } from '../types/ScrollPositionSchema'

const initialState: ScrollPositionSchema = {
  scrollPosition: {},
}

const scrollPositionSlice = createSlice({
  name: 'scrollPosition',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ pageAddress: string; position: number }>
    ) => {
      state.scrollPosition[action.payload.pageAddress] = action.payload.position
    },
  },
})

export const { reducer: scrollPositionReducer } = scrollPositionSlice

export const { actions: scrollPositionActions } = scrollPositionSlice
