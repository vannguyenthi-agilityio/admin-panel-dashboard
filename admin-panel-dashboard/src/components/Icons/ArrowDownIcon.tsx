import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const ArrowDownIcon: React.FC<IIcon> = ({
  width = "8",
  height = "5",
  stroke = COLOR.SECONDARY[100],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default ArrowDownIcon;
