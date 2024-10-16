import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const ArrowLeftIcon = ({
  width = "14",
  height = "10",
  stroke = COLOR.SECONDARY[200],
  className
}: IIcon) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.54165 0.625L0.958313 5L5.54165 9.375M13.0416 5H1.16665"
      stroke={stroke}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowLeftIcon;
