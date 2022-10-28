import Page from './components/Page';
import PageHeader from './components/Page/Header';
import Info from './components/Page/Info';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import Header from './components/Header';
import Menu from './components/Menu';
import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  return (
    <>
      <Header />

      <div className='container'>
        <Menu />

        <Page>
          <PageHeader>Поиск адресов</PageHeader>
          <Info>Введите интересующий вас адрес</Info>
          <Searchbar />

          <SearchResults />

          {/* <Loader />
          <Status /> */}
        </Page>

        {/* <Page>
          <PageHeader>Новости</PageHeader>
          <Info>Обновление CRM до 1.2</Info>

          <Article />
        </Page> */}
      </div>
    </>
  );
};

export default App;
