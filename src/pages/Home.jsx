import React from 'react';

import { useDispatch } from 'react-redux';
import { upload } from '../store/active/activeSlice';
import { load } from '../store/favorites/favoritesSlice';
import { toggleIsFavorite } from '../store/active/activeSlice';

import { Active } from '../components/Active';
// <div>{import.meta.env.VITE_API_KEY}</div>;
export const Home = () => {
  const dispatch = useDispatch();
  const start = async () => {
    let res = await fetch(
      'https://65841ded4d1ee97c6bcf0633.mockapi.io/api/learning/movies',
    );
    let data = await res.json();
    console.log(`data API: `, data);
    dispatch(upload(data[0]));

    // favorites
    let test = [1];
    localStorage.setItem('favoritesList', JSON.stringify(test));
    let favorites = localStorage.getItem('favoritesList');
    let favoritesArr = JSON.parse(favorites);
    for (const favoriteId of favoritesArr) {
      let resFavorites = await fetch(
        'https://65841ded4d1ee97c6bcf0633.mockapi.io/api/learning/favorite',
      );
      let dataFavorite = await resFavorites.json();
      dispatch(load(dataFavorite));
      console.log(`favorite data API: `, favoriteId, dataFavorite);
      // check if active is favorite
      console.log(`test: `, data[0].id, favoriteId);
      if (data[0].id == favoriteId) {
        dispatch(toggleIsFavorite());
      }
    }
  };

  return (
    <div>
      {/*  Search */}
      <input type="text" placeholder="search for a movie" />
      <Active />
      <button onClick={() => start()}>get DATA</button>
    </div>
  );
};
