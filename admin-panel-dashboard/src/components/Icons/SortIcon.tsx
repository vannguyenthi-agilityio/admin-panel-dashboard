import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const SortIcon: React.FC<IIcon> = ({
  width = "16",
  height = "16",
  stroke = COLOR.SECONDARY[300],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.66669 5.16666H13.3334M4.33335 7.83332H11.6667M5.66669 10.5H10.3334" stroke={stroke} stroke-linecap="round"/>
  </svg>
);

export default SortIcon;
