import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
      if (state.length > 1) {
        state = state.filter((movie) => {
          console.log(`starting detele favorite`, action.payload.id, movie.id);
          return movie.id !== action.payload.id;
        });
      } else {
        return initialState;
      }
    },
  },
});

export const { load, add, del } = favoritesSlice.actions;
export default favoritesSlice.reducer;
