import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ImageState = {
  image: string;
  isImageUploaded: boolean;
};

const initialState: ImageState = {
  image: '',
  isImageUploaded: false,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
      state.isImageUploaded = true;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
