import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
  year: '',
  runtime: '',
  director: '',
  poster: '',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    load(state, action) {
      action.payload.forEach((movie) => {
        state.push({
          id: movie.id,
          title: movie.title,
          year: movie.year,
          runtime: movie.runtime,
          director: movie.director,
          poster: movie.poste,
        });
      });
    },
    add(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        year: action.payload.year,
        runtime: action.payload.runtime,
        director: action.payload.director,
        poster: action.payload.poster,
      });
    },
    del(state, action) {
      state.filter((movie) => movie.id != action.payload);
    },
  },
});

export const { load, add, del } = favoritesSlice.actions;
export default favoritesSlice.reducer;
