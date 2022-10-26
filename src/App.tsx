import Person from './components/Icons/Person';
import PersonFrame from './components/Icons/PersonFrame';
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
      <main className='main'></main>
      <menu className='menu'></menu>
    </>
  );
};

export default App;
