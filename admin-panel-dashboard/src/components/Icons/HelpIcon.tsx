import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const HelpIcon: React.FC<IIcon> = ({
  width = "16",
  height = "16",
  stroke = COLOR.PRIMARY[50],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.75 6C5.75 6 6 3.75 8 3.75C10 3.75 10.25 5 10.25 6C10.25 6.7513 9.8266 7.5027 8.9798 7.8299C8.4647 8.0289 8 8.4477 8 9V9.25M15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8ZM8.5 12C8.5 12.2761 8.2761 12.5 8 12.5C7.7239 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.7239 11.5 8 11.5C8.2761 11.5 8.5 11.7239 8.5 12Z" stroke={stroke} stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default HelpIcon;
