import Loader from '../components/Loader';
import Page from '../components/Page';
import Header from '../components/Page/Header';
import Info from '../components/Page/Info';
import Searchbar from '../components/Searchbar';
import SearchResults from '../components/SearchResults';
import Status from '../components/Status';

const Address = () => {
  return (
    <Page>
      <Header>Поиск адресов</Header>
      <Info>Введите интересующий вас адрес</Info>
      <Searchbar />

      <SearchResults />

      {/* <Loader />
      <Status /> */}
    </Page>
  );
};

export default Address;
