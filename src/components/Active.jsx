import React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add } from '../store/favorites/favoritesSlice';
import { del } from '../store/favorites/favoritesSlice';
import { toggleIsFavorite } from '../store/active/activeSlice';

export const Active = () => {
  const movie = useSelector((store) => store.active);
  const dispatch = useDispatch();
  const addFavorite = () => {
    dispatch(add(movie));
    let favoritesArray = JSON.parse(localStorage.getItem('favoritesList'));
    favoritesArray.push(movie.id);
    localStorage.setItem('favoritesList', JSON.stringify(favoritesArray));
    dispatch(toggleIsFavorite());
    console.log(`favorite added`);
  };
  const deleteFavorite = () => {
    dispatch(del(movie));
    let favoritesArray = JSON.parse(localStorage.getItem('favoritesList'));
    favoritesArray = favoritesArray.filter((id) => id != movie.id);
    localStorage.setItem('favoritesList', JSON.stringify(favoritesArray));
    dispatch(toggleIsFavorite());
    console.log(`favorite deleted`);
  };
  return (
    <div>
      <p> Id: {movie.id}</p>
      <p> Title: {movie.title}</p>
      <p> Year: {movie.year}</p>
      <p> Country: {movie.country}</p>
      <p> Run Time: {movie.runtime}</p>
      <p> Director:{movie.director}</p>
      <p> Plot: {movie.plot}</p>
      <p> Imdb Rating: {movie.imdbRating}</p>
      <img src={movie.poster} />
      <br />
      <button
        onClick={() => {
          movie.isFavorite ? deleteFavorite() : addFavorite();
        }}
      >
        {movie.isFavorite ? 'FAVORITE' : 'NOT FAVORITE'}
      </button>
    </div>
  );
};
