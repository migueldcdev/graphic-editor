import { createSlice } from '@reduxjs/toolkit';

type CanvasState = {
  isRectangleSelected: boolean;
};

const initialState: CanvasState = {
  isRectangleSelected: false,
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    selectRectangle: (state) => {
      state.isRectangleSelected = true;
    },
    unselectRectangle: (state) => {
      state.isRectangleSelected = false;
    },
  },
});

export const { selectRectangle, unselectRectangle } = canvasSlice.actions;
export default canvasSlice.reducer;
