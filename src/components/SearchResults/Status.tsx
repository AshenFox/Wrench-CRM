import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';

interface OwnProps {}

type Props = OwnProps;

const Status: FC<Props> = () => {
  const { is_nothing_found, is_too_short } = useAppSelector(({ main }) => main);

  if (is_nothing_found)
    return <p className='status'>Адреса по запросу "{is_nothing_found}" не найдены</p>;
  if (is_too_short)
    return <p className='status'>Запрос должен быть длиннее чем 3 символа.</p>;

  return <></>;
};

export default Status;
