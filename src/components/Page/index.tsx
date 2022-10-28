import { FC, ReactNode } from 'react';

interface OwnProps {
  children: ReactNode;
}

type Props = OwnProps;

const Page: FC<Props> = ({ children }) => {
  return <main className='page'>{children}</main>;
};

export default Page;
