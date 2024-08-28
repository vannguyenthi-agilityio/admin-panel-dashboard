import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const CheckIcon: React.FC<IIcon> = ({
  width = "15",
  height = "12",
  stroke = COLOR.PRIMARY[50],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.0835 6.8665L3.67345 10.4138C4.48521 11.5256 6.1514 11.504 6.9341 10.3715L13.5835 0.75" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default CheckIcon;
