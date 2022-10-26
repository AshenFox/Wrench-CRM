import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Wrench: FC<Props> = () => {
  return (
    <svg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
      <path d='M39.3636 0.772202C34.7478 -0.888638 29.3847 0.129442 25.6861 3.828C21.9876 7.52652 20.9695 12.8897 22.6303 17.5055L0 40.1358L7.86416 48L30.4945 25.3696C35.1104 27.0304 40.4735 26.0123 44.172 22.3138C47.8706 18.6152 48.8887 13.2521 47.2278 8.63628L39.2697 16.5944L33.6014 14.3986L31.4055 8.73028L39.3636 0.772202ZM9.4472 38.5528C10.3497 39.4553 10.3497 40.9185 9.4472 41.821C8.54472 42.7235 7.08148 42.7235 6.179 41.821C5.27648 40.9185 5.27648 39.4552 6.179 38.5528C7.08148 37.6503 8.54472 37.6503 9.4472 38.5528Z' />
    </svg>
  );
};

export default Wrench;
