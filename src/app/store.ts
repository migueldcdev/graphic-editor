import { combineReducers, configureStore } from '@reduxjs/toolkit';
import canvasReducer from '../features/canvas/canvasSlice';
import imageReducer from '../features/image/imageSlice';

const rootReducer = combineReducers({
  image: imageReducer,
  canvas: canvasReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
