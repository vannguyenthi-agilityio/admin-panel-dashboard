import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const MailIcon = ({
  width = "16",
  height = "14",
  stroke = COLOR.SECONDARY[200],
  className
}: IIcon) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 1.5L8 7.25L14.5 1.5M0.75 2.75C0.75 1.64543 1.64543 0.75 2.75 0.75H13.25C14.3546 0.75 15.25 1.64543 15.25 2.75V11.25C15.25 12.3546 14.3546 13.25 13.25 13.25H2.75C1.64543 13.25 0.75 12.3546 0.75 11.25V2.75Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MailIcon;
