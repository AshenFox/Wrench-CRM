import { FC } from 'react';

interface OwnProps {}

type Props = OwnProps;

const MapPoint: FC<Props> = () => {
  return (
    <svg viewBox='0 0 25 32' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12.442 32C10.197 30.085 8.1161 27.9857 6.22101 25.7239C3.37712 22.3272 1.56217e-06 17.2687 1.56217e-06 12.4483C-0.00123179 9.98645 0.727874 7.5796 2.09505 5.53232C3.46222 3.48504 5.40601 1.88935 7.6804 0.947207C9.9548 0.0050599 12.4576 -0.241197 14.872 0.239601C17.2864 0.720399 19.5039 1.90664 21.2439 3.6482C22.4023 4.8015 23.3205 6.1731 23.9454 7.68363C24.5702 9.19416 24.8892 10.8136 24.884 12.4483C24.884 17.2687 21.5069 22.3272 18.663 25.7239C16.7679 27.9857 14.687 30.085 12.442 32ZM12.442 7.11596C11.0278 7.11596 9.67152 7.67776 8.67152 8.67776C7.67152 9.67776 7.10973 11.034 7.10973 12.4483C7.10973 13.8625 7.67152 15.2188 8.67152 16.2188C9.67152 17.2188 11.0278 17.7806 12.442 17.7806C13.8562 17.7806 15.2125 17.2188 16.2125 16.2188C17.2125 15.2188 17.7743 13.8625 17.7743 12.4483C17.7743 11.034 17.2125 9.67776 16.2125 8.67776C15.2125 7.67776 13.8562 7.11596 12.442 7.11596Z' />
    </svg>
  );
};

export default MapPoint;
