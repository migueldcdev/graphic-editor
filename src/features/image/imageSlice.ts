import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ImageState = {
  image: boolean;
};

const initialState: ImageState = {
  image: false,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<boolean>) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
