import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const SearchResults: FC<Props> = () => {
  return (
    <div className='search-results'>
      <h4 className='search-results__header'>Адреса</h4>
      <ul className='search-results__list'>
        <li className='search-results__list-item'>
          город Москва, улица Ленина 13, дом 32
        </li>
        <li className='search-results__list-item'>
          город Санкт-Петербург, улица Ленина 13, дом 32
        </li>
        <li className='search-results__list-item'>
          город Краснодар, улица Ленина 13, дом 32
        </li>
        <li className='search-results__list-item'>
          город Ростов-На-Дону, улица Ленина 13, дом 32
        </li>
      </ul>
    </div>
  );
};

export default SearchResults;
