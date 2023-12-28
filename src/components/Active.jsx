import React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add } from '../store/favorites/favoritesSlice';
import { del } from '../store/favorites/favoritesSlice';
import { toggleIsFavorite } from '../store/active/activeSlice';

import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
  ActiveSection,
  MovieContainer,
  InfoContainer,
  InfoRow,
  RowTitle,
  RowText,
  Poster,
  ActorContainer,
  ActorCard,
  StyledIconFavorite,
} from '../styles/Active.styled';

export const Active = () => {
  const movie = useSelector((store) => store.active);
  const dispatch = useDispatch();
  const addFavorite = () => {
    dispatch(add(movie));

    let favoritesArray = JSON.parse(localStorage.getItem('favoritesList'));
    console.log(`local Storage check: `, favoritesArray);
    if (!favoritesArray) {
      localStorage.setItem('favoritesList', JSON.stringify([movie.id]));
    } else {
      favoritesArray.push(movie.id);
      localStorage.setItem('favoritesList', JSON.stringify(favoritesArray));
    }
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
    <ActiveSection>
      <StyledIconFavorite
        icon={faHeart}
        isfavorite={movie.isFavorite.toString()}
        onClick={() => {
          movie.isFavorite ? deleteFavorite() : addFavorite();
        }}
      />
      <MovieContainer>
        <Poster>
          <img src={movie.poster} />
        </Poster>
        <InfoContainer>
          <InfoRow>
            <RowTitle>Title </RowTitle>
            <RowText>{movie.title}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Year </RowTitle>
            <RowText>{movie.year}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Country </RowTitle>
            <RowText>{movie.country}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Run Time </RowTitle>
            <RowText>{movie.runtime}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Director </RowTitle>
            <RowText>{movie.director}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Imdb Rating </RowTitle>
            <RowText>{movie.imdbRating}</RowText>
          </InfoRow>
        </InfoContainer>
      </MovieContainer>

      <ActorContainer>
        {movie.actors?.split(',').map((actor) => (
          <ActorCard key={actor}>{actor.trim()}</ActorCard>
        ))}
      </ActorContainer>
    </ActiveSection>
  );
};
