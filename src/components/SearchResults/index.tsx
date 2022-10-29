import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import Loader from './Loader';
import Status from './Status';

interface OwnProps {}

type Props = OwnProps;

const SearchResults: FC<Props> = () => {
  const { address_list, is_loading, is_nothing_found, is_too_short } = useAppSelector(
    ({ main }) => main
  );

  if (is_loading) return <Loader />;
  if (is_nothing_found || is_too_short) return <Status />;
  if (!address_list.length) return <></>;

  return (
    <div className='search-results'>
      <h4 className='search-results__header'>Адреса</h4>
      <ul className='search-results__list'>
        {address_list.map(({ value }) => (
          <li className='search-results__list-item'>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
