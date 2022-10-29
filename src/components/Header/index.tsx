import { FC } from 'react';
import Wrench from '../Icons/Wrench';
import PersonFrame from '../Icons/PersonFrame';
import { useActions, useAppSelector } from '../../store/hooks';

interface OwnProps {}

type Props = OwnProps;

const Header: FC<Props> = () => {
  const { is_menu_open } = useAppSelector(({ main }) => main);

  const { set_is_menu_open } = useActions();

  const toggleMenu = () => set_is_menu_open(!is_menu_open);

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
        <button
          onClick={toggleMenu}
          className={`header__ham ${is_menu_open ? 'active' : ''}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
