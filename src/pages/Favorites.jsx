import React from 'react';

import { PageContainer } from '../styles/Page.styled';

import { Favorite } from '../components/Favorite';

import { useSelector } from 'react-redux';

import { FavoriteSection } from '../styles/Favorite.styled';

export const Favorites = () => {
  const favorites = useSelector((store) => store.favorites);

  return (
    <PageContainer>
      {favorites.length > 0 ? (
        <FavoriteSection>
          {favorites.map((favorite) => (
            <Favorite favorite={favorite} key={favorite.id} />
          ))}
        </FavoriteSection>
      ) : null}
    </PageContainer>
  );
};
