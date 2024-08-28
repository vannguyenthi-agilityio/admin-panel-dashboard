import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const SettingIcon: React.FC<IIcon> = ({
  width = "16",
  height = "14",
  stroke = COLOR.PRIMARY[50],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.75 3H3.25M8.75 3H15.25M0.75 11H8.25M13.75 11H15.25M8.25 3C8.25 4.24264 7.24264 5.25 6 5.25C4.75736 5.25 3.75 4.24264 3.75 3C3.75 1.75736 4.75736 0.75 6 0.75C7.24264 0.75 8.25 1.75736 8.25 3ZM13.25 11C13.25 12.2426 12.2426 13.25 11 13.25C9.75736 13.25 8.75 12.2426 8.75 11C8.75 9.75736 9.75736 8.75 11 8.75C12.2426 8.75 13.25 9.75736 13.25 11Z" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default SettingIcon;
