import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const ArrowRightIcon = ({
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
      d="M8.45834 0.625L13.0417 5L8.45834 9.375M12.8333 5H0.958344"
      stroke={stroke}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
