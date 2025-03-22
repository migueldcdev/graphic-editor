import { combineReducers, configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/image/imageSlice';

const rootReducer = combineReducers({
  image: imageReducer,
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
