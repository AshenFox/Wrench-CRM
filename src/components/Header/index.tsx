import { FC, useState } from 'react';
import Wrench from '../Icons/Wrench';
import PersonFrame from '../Icons/PersonFrame';

interface OwnProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

type Props = OwnProps;

const Header: FC<Props> = ({ isMenuOpen, onClick }) => {
  // ??????/
  return (
    <header className='header'>
      <a href='./' className='header__logo'>
        <Wrench />
        <span className='header__logo-text'>Wrench CRM</span>
      </a>
      <div className='header__menu'>
        <div className='header__user'>
          <div className='header__user-icon'>
            <PersonFrame />
          </div>
          <span className='header__user-name'>Имя</span>
          <span className='header__user-surname'>&nbsp;Фамилия</span>
        </div>
        <button onClick={onClick} className={`header__ham ${isMenuOpen ? 'active' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
