import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { update } from '../store/active/activeSlice';

import { FavoriteCard } from '../styles/Favorite.styled';

export const Favorite = ({ favorite }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <FavoriteCard
      onClick={() => {
        dispatch(update(favorite));
        nav('/');
      }}
      poster={favorite.poster}
    >
      <p> {favorite.title}</p>
      <p> {favorite.year}</p>
      <p> {favorite.runtime}</p>
      <p> {favorite.director}</p>
    </FavoriteCard>
  );
};
