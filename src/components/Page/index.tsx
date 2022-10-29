import { FC, ReactNode } from 'react';

interface OwnProps {
  children: ReactNode;
  isDecorated?: boolean;
}

type Props = OwnProps;

const Page: FC<Props> = ({ children, isDecorated = false }) => {
  return <main className={`page ${isDecorated ? 'decorated' : ''}`}>{children}</main>;
};

export default Page;
