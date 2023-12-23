import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h2>MovieApp</h2>
      <nav>
        <ul>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/favorites">
            <button>Favorite</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
