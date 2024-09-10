import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const DeleteIcon = ({
  width = "14",
  height = "14",
  stroke = COLOR.SECONDARY[200],
  className
}: IIcon) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.62496 3.45837L3.32592 11.5195C3.40081 12.3807 4.12181 13.0417 4.98632 13.0417H9.01363C9.87813 13.0417 10.5991 12.3807 10.674 11.5195L11.375 3.45837M5.12496 3.25004V2.62504C5.12496 1.70457 5.87113 0.958374 6.79163 0.958374H7.20829C8.12879 0.958374 8.87496 1.70457 8.87496 2.62504V3.25004M1.16663 3.45837H12.8333"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DeleteIcon;
