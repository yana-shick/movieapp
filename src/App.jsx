import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Favorites } from './components/Favorites';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div>{import.meta.env.VITE_API_KEY}</div>;
  );
}

export default App;
