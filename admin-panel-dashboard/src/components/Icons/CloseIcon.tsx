import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const CloseIcon: React.FC<IIcon> = ({
  width = "13",
  height = "12",
  stroke = COLOR.PRIMARY[50],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.5835 0.75L1.0835 11.25M1.0835 0.75L11.5835 11.25" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default CloseIcon;
