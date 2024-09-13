import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const ClockIcon = ({
  width = "16",
  height = "16",
  stroke = COLOR.PRIMARY[50],
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
      d="M7.75 1V6.25C7.75 7.3546 8.6454 8.25 9.75 8.25H15M15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ClockIcon;
