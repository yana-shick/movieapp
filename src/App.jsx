
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/Global.styled';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyles />
    </>
  );
}

export default App;
