import { FC } from 'react';
import Calender from '../Icons/Calender';
import CogWheel from '../Icons/CogWheel';
import Exit from '../Icons/Exit';
import House from '../Icons/House';
import MagnifyingGlass from '../Icons/MagnifyingGlass';
import MapPoint from '../Icons/MapPoint';
import Person from '../Icons/Person';
import Tables from '../Icons/Tables';
import Telephone from '../Icons/Telephone';
import Triangle from '../Icons/Triangle';
import TV from '../Icons/TV';

interface OwnProps {}

type Props = OwnProps;

const Menu: FC<Props> = () => {
  return (
    <menu className='menu'>
      <h3 className='menu__header'>Меню</h3>
      <div className='menu__item'>
        <div className='menu__item-inner'>
          <div className='menu__item-icon'>
            <House />
          </div>
          <span className='menu__item-title'>Главная</span>
        </div>
      </div>
      <div className='menu__item'>
        <div className='menu__item-inner'>
          <div className='menu__item-icon'>
            <MagnifyingGlass />
          </div>
          <span className='menu__item-title'>Поиск адресов</span>
        </div>
      </div>
      <div className='menu__item'>
        <div className='menu__item-inner'>
          <div className='menu__item-icon'>
            <Tables />
          </div>
          <span className='menu__item-title'>Таблицы</span>
        </div>
      </div>
      <div className='menu__item'>
        <div className='menu__item-inner'>
          <div className='menu__item-icon'>
            <Calender />
          </div>
          <span className='menu__item-title'>Календарь</span>
        </div>
      </div>
      <div className='menu__item'>
        <div className='menu__item-inner'>
          <div className='menu__item-icon'>
            <MapPoint />
          </div>
          <span className='menu__item-title'>Карты</span>
        </div>
      </div>
      <div className='menu__item'>
        <div className='menu__item-inner'>
          <div className='menu__item-icon'>
            <TV />
          </div>
          <span className='menu__item-title'>Виджеты</span>
        </div>
      </div>
      <div className='menu__item'>
        <div className='menu__item-inner'>
          <div className='menu__item-icon'>
            <CogWheel />
          </div>
          <span className='menu__item-title'>Настройки</span>
          <div className='menu__sub-arrow'>
            <Triangle />
          </div>
        </div>
        <div className='menu__sub'>
          <div className='menu__item-inner active'>
            <div className='menu__item-icon'>
              <Person />
            </div>
            <span className='menu__item-title'>Настройки профиля</span>
          </div>
          <div className='menu__item-inner'>
            <div className='menu__item-icon'>
              <Telephone />
            </div>
            <span className='menu__item-title'>Управление финансами</span>
          </div>
        </div>
      </div>
      <div className='menu__item'>
        <div className='menu__item-inner'>
          <div className='menu__item-icon'>
            <Exit />
          </div>
          <span className='menu__item-title'>Выход</span>
        </div>
      </div>
    </menu>
  );
};

export default Menu;
