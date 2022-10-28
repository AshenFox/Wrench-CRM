import { FC } from 'react';

interface OwnProps {
  children: string;
}

type Props = OwnProps;

const Info: FC<Props> = ({ children }) => {
  return <span className='page__info'>{children}</span>;
};

export default Info;
