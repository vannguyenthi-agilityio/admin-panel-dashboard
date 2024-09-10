import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const PrevIcon = ({
  width = "5",
  height = "8",
  stroke = COLOR.SECONDARY[100],
  className
}: IIcon) => (
  <svg 
    width={width}
    height={height}
    className={className}
    viewBox="0 0 5 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.04167 1.29175L1.125 4.00008L4.04167 6.70841"
      stroke={stroke}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PrevIcon;
