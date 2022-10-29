import { FC } from 'react';
import Page from '../components/Page';
import Header from '../components/Page/Header';
import Info from '../components/Page/Info';
import Searchbar from '../components/Searchbar';
import SearchResults from '../components/SearchResults';

interface OwnProps {}

type Props = OwnProps;

const Address: FC<Props> = () => {
  return (
    <Page>
      <Header>Поиск адресов</Header>
      <Info>Введите интересующий вас адрес</Info>
      <Searchbar />

      <SearchResults />
    </Page>
  );
};

export default Address;
