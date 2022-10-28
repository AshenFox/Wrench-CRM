import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Triangle: FC<Props> = () => {
  return (
    <svg viewBox='0 0 13 12' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6.06218 0.749999C6.25463 0.416666 6.73575 0.416667 6.9282 0.75L12.5574 10.5C12.7498 10.8333 12.5093 11.25 12.1244 11.25H0.866025C0.481124 11.25 0.240563 10.8333 0.433013 10.5L6.06218 0.749999Z' />
    </svg>
  );
};

export default Triangle;
