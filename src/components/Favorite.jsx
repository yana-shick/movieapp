import React from 'react';

import { useDispatch } from 'react-redux';
import { upload } from '../store/active/activeSlice';

export const Favorite = ({ favorite }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(upload(favorite));
      }}
    >
      <p> {favorite.title}</p>
      <p> {favorite.year}</p>
      <p> {favorite.runtime}</p>
      <p> {favorite.director}</p>
      <img src={favorite.poster} />
    </div>
  );
};
