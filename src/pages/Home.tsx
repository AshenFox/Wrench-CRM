import { FC } from 'react';
import Article from '../components/Article';
import Page from '../components/Page';
import Header from '../components/Page/Header';
import Info from '../components/Page/Info';

interface OwnProps {}

type Props = OwnProps;

const Home: FC<Props> = () => {
  return (
    <Page isDecorated={true}>
      <Header>Новости</Header>
      <Info>Обновление CRM до 1.2</Info>
      <Article />
    </Page>
  );
};

export default Home;
