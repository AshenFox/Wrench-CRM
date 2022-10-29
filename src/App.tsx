import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import { FC } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Address from './pages/Address';
import { Provider } from 'react-redux';
import store from './store/store';

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/Wrench-CRM'>
        <Header />
        <div className='container'>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/address' element={<Address />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
