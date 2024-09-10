import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const BellIcon = ({
  width = "16",
  height = "16",
  stroke = COLOR.SECONDARY[200],
  className
}: IIcon) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12.75C5 12.75 5 15.25 8 15.25C11 15.25 11 12.75 11 12.75M13.25 8V6C13.25 3.1005 10.8995 0.75 8 0.75C5.10051 0.75 2.75 3.10051 2.75 6V8L0.75 12.25H15.25L13.25 8Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);

export default BellIcon;
