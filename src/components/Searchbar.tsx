import { FC } from 'react';
import MagnifyingGlass from './Icons/MagnifyingGlass';

interface OwnProps {}

type Props = OwnProps;

const Searchbar: FC<Props> = () => {
  return (
    <div className='searchbar'>
      <input type='text' className='searchbar__input' />
      <button className='searchbar__btn'>
        <MagnifyingGlass />
        <span>Поиск</span>
      </button>
    </div>
  );
};

export default Searchbar;
