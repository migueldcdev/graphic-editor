import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

type Coordinates = {
  x: number;
  y: number;
}

export type Rectangle = {
  id: string;
  coordinates: Coordinates
  width: number;
  height: number;
};

type CanvasState = {
  isCreateRectangleSelected: boolean;
  rectangles: Rectangle[];
};

const initialState: CanvasState = {
  isCreateRectangleSelected: false,
  rectangles: [
    {
      id: 'string',
      coordinates: {x: 10, y: 4},
      width: 100,
      height: 20,
    },
  ],
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    selectRectangle: (state) => {
      state.isCreateRectangleSelected = true;
    },
    unselectRectangle: (state) => {
      state.isCreateRectangleSelected = false;
    },
    addRectangle: (state, action: PayloadAction<Coordinates>) => {
      const rectangle = {
        id: uuidv4(),
        coordinates: action.payload,
        width: 0,
        height: 0,
      }
      state.rectangles.push(rectangle)
    }
  },
});

export const { selectRectangle, unselectRectangle } = canvasSlice.actions;
export default canvasSlice.reducer;
