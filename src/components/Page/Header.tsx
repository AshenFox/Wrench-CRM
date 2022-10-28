import { FC } from 'react';

interface OwnProps {
  children: string;
}

type Props = OwnProps;

const Header: FC<Props> = ({ children }) => {
  return <h1 className='page__header'>{children}</h1>;
};

export default Header;
