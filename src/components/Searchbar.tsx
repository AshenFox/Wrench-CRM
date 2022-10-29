import {
  FC,
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
  useState,
  useEffect,
} from 'react';
import { useActions, useAppSelector } from '../store/hooks';
import MagnifyingGlass from './Icons/MagnifyingGlass';

interface OwnProps {}

type Props = OwnProps;

const Searchbar: FC<Props> = () => {
  const { query, is_too_short } = useAppSelector(({ main }) => main);

  const [isError, setIsError] = useState(false);

  const { set_query, get_address_list } = useActions();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;

    if (value.length > 3) setIsError(false);
    set_query(e.target.value);
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log('Click!');

    get_address_list();
  };

  const onInputEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter!');

      get_address_list();
    }
  };

  useEffect(() => {
    if (is_too_short) setIsError(true);
  }, [is_too_short]);

  return (
    <div className='searchbar'>
      <input
        type='text'
        className={`searchbar__input ${isError ? 'error' : ''}`}
        value={query}
        onChange={onInputChange}
        onKeyDown={onInputEnter}
      />
      <button className='searchbar__btn' onClick={onButtonClick}>
        <MagnifyingGlass />
        <span>Поиск</span>
      </button>
    </div>
  );
};

export default Searchbar;
