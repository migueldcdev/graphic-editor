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
  rotation: number;
};

type CanvasState = {
  isCreateRectangleSelected: boolean;
  rectangles: Rectangle[];
  isShowGridSelected: boolean;
};

const initialState: CanvasState = {
  isCreateRectangleSelected: false,
  rectangles: [],
  isShowGridSelected: false,
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    selectCreateRectangle: (state) => {
      state.isCreateRectangleSelected = true;
      state.isShowGridSelected = false;
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
        rotation: 0,
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
    updateRectangleSize: (
      state,
      action: PayloadAction<{ id: string; width: number; height: number }>,
    ) => {
      const rect = state.rectangles.find((r) => r.id === action.payload.id);
      if (rect) {
        rect.width = action.payload.width;
        rect.height = action.payload.height;
      }
    },
    updateRectangleRotation: (
      state,
      action: PayloadAction<{ id: string; rotation: number }>,
    ) => {
      const rect = state.rectangles.find((r) => r.id === action.payload.id);
      if (rect) rect.rotation = action.payload.rotation;
    },
    selectShowGrid: (state) => {
      state.isCreateRectangleSelected = false;
      state.isShowGridSelected = true;
    },
    unselectShowGrid: (state) => {
      state.isShowGridSelected = false;
    },
  },
});

export const {
  selectCreateRectangle,
  unselectCreateRectangle,
  addRectangle,
  updateRectangleCoordinates,
  selectShowGrid,
  unselectShowGrid,
  updateRectangleSize,
  updateRectangleRotation,
} = canvasSlice.actions;
export default canvasSlice.reducer;
