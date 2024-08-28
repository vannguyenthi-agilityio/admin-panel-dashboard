import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const ArrowUpRightIcon: React.FC<IIcon> = ({
  width = "20",
  height = "20",
  stroke = COLOR.SECONDARY[200],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.375 12.7083V5.625H7.29167M14.1667 5.83333L5.625 14.375" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default ArrowUpRightIcon;
