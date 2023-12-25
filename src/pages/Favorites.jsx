import React from 'react';

import { Favorite } from '../components/Favorite';

import { useSelector } from 'react-redux';

export const Favorites = () => {
  const favorites = useSelector((store) => store.favorites);

  return (
    <>
      {favorites.map((favorite) => (
        <Favorite favorite={favorite} key={favorite.id} />
      ))}
    </>
  );
};
