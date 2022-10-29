import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Loader: FC<Props> = () => {
  return (
    <div className='loader'>
      <div className='loader__loader-ring'></div>
    </div>
  );
};

export default Loader;
