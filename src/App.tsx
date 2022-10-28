import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import { FC } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Address from './pages/Address';

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <Header isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      <div className='container'>
        <Menu isMenuOpen={isMenuOpen} onClick={closeMenu} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/address' element={<Address />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
