import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const UploadIcon: React.FC<IIcon> = ({
  width = "14",
  height = "14",
  stroke = COLOR.PRIMARY[50],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.958374 9.29159V10.5416C0.958374 11.9223 2.07767 13.0416 3.45837 13.0416H10.5417C11.9225 13.0416 13.0417 11.9223 13.0417 10.5416V9.29159M7.00004 8.87492V1.16659M4.29171 3.87492L7.00004 0.958252L9.70837 3.87492" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default UploadIcon;
