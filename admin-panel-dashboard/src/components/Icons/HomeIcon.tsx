import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const HomeIcon = ({
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
      d="M2.75024 15.25H13.2502C14.3548 15.25 15.2502 14.3546 15.2502 13.25V5.75001L8.0002 0.75L0.750244 5.75001V13.25C0.750244 14.3546 1.64568 15.25 2.75024 15.25Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.74963 11.7491C5.74963 10.6445 6.6451 9.74906 7.7496 9.74906H8.2496C9.3542 9.74906 10.2496 10.6445 10.2496 11.7491V15.2491H5.74963V11.7491Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeIcon;
