import Calender from './components/Icons/Calender';
import CogWheel from './components/Icons/CogWheel';
import Exit from './components/Icons/Exit';
import House from './components/Icons/House';
import MagnifyingGlass from './components/Icons/MagnifyingGlass';
import MapPoint from './components/Icons/MapPoint';
import Person from './components/Icons/Person';
import PersonFrame from './components/Icons/PersonFrame';
import Tables from './components/Icons/Tables';
import TV from './components/Icons/TV';
import Wrench from './components/Icons/Wrench';

const App = () => {
  return (
    <>
      <header className='header'>
        <a href='./' className='header__logo'>
          <Wrench />
          <h1 className='header__logo-text'>Wrench CRM</h1>
        </a>
        <div className='header__menu'>
          <div className='header__user'>
            <div className='header__user-icon'>
              <PersonFrame />
            </div>
            <span className='header__user-name'>Имя</span>
            <span className='header__user-surname'>&nbsp;Фамилия</span>
          </div>
        </div>
      </header>

      <div className='container'>
        <menu className='menu'>
          <h3 className='menu__header'>Меню</h3>
          {/* ======== */}
          <div className='menu__item'>
            <div className='menu__item-icon'>
              <House />
            </div>
            <span className='menu__item-title'>Главная</span>
          </div>
          {/* ======== */}
          <div className='menu__item'>
            <div className='menu__item-icon'>
              <MagnifyingGlass />
            </div>
            <span className='menu__item-title'>Поиск адресов</span>
          </div>
          {/* ======== */}
          <div className='menu__item'>
            <div className='menu__item-icon'>
              <Tables />
            </div>
            <span className='menu__item-title'>Таблицы</span>
          </div>
          {/* ======== */}
          <div className='menu__item'>
            <div className='menu__item-icon'>
              <Calender />
            </div>
            <span className='menu__item-title'>Календарь</span>
          </div>
          {/* ======== */}
          <div className='menu__item'>
            <div className='menu__item-icon'>
              <MapPoint />
            </div>
            <span className='menu__item-title'>Карты</span>
          </div>
          {/* ======== */}
          <div className='menu__item'>
            <div className='menu__item-icon'>
              <TV />
            </div>
            <span className='menu__item-title'>Виджеты</span>
          </div>
          {/* ======== */}
          <div className='menu__item'>
            <div className='menu__item-icon'>
              <CogWheel />
            </div>
            <span className='menu__item-title'>Настройки</span>
          </div>
          {/* ======== */}
          <div className='menu__item'>
            <div className='menu__item-icon'>
              <Exit />
            </div>
            <span className='menu__item-title'>Выход</span>
          </div>
        </menu>
        <main className='main'></main>
      </div>
    </>
  );
};

export default App;
