import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type Coordinates = {
  x: number;
  y: number;
};

export type Rectangle = {
  id: string;
  coordinates: Coordinates;
  width: number;
  height: number;
};

type CanvasState = {
  isCreateRectangleSelected: boolean;
  rectangles: Rectangle[];
};

const initialState: CanvasState = {
  isCreateRectangleSelected: false,
  rectangles: [],
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    selectCreateRectangle: (state) => {
      state.isCreateRectangleSelected = true;
    },
    unselectCreateRectangle: (state) => {
      state.isCreateRectangleSelected = false;
    },
    addRectangle: (state, action: PayloadAction<Coordinates>) => {
      const rectangle = {
        id: uuidv4(),
        coordinates: action.payload,
        width: 20,
        height: 20,
      };
      state.rectangles.push(rectangle);
      state.isCreateRectangleSelected = false;
    },
    updateRectangleCoordinates: (
      state,
      action: PayloadAction<{ id: string; coordinates: Coordinates }>,
    ) => {
      const rect = state.rectangles.find((r) => r.id === action.payload.id);
      if (rect) {
        rect.coordinates = action.payload.coordinates;
      }
    },
  },
});

export const {
  selectCreateRectangle,
  unselectCreateRectangle,
  addRectangle,
  updateRectangleCoordinates,
} = canvasSlice.actions;
export default canvasSlice.reducer;
