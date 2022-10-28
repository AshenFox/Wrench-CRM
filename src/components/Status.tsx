import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Status: FC<Props> = () => {
  return <p className='status'>Адреса по запросу "asdflkajsdlf" не найдены</p>;
};

export default Status;
