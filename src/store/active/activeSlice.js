import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
  year: '',
  country: '',
  runtime: '',
  director: '',
  actors: [],
  plot: '',
  imdbRating: '',
  poster: '',
  isFavorite: false,
};

const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    upload(state, action) {
      state.id = action.payload.imdbID;
      state.title = action.payload.year;
      state.country = action.payload.country;
      state.runtime = action.payload.runtime;
      state.director = action.payload.director;
      state.actors = [];
      state.plot = action.payload.plot;
      state.imdbRating = action.payload.imdbRating;
      state.poster = action.payload.poster;
      state.isFavorite = false;
    },
    toggleIsFavorite(state, action) {
      state.isFavorite = action.payload;
    },
  },
});

console.log(activeSlice);

export const { upload, toggleIsFavorit } = activeSlice.actions;
export default activeSlice.reducer;
