import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const EditIcon: React.FC<IIcon> = ({
  width = "20",
  height = "20",
  stroke = COLOR.SECONDARY[200],
  className
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.0417 16.0417H11.4584M3.95837 16.0417L7.50004 15.2083L15.2441 7.46426C15.5695 7.13881 15.5695 6.61118 15.2441 6.28574L13.7143 4.75592C13.3889 4.43048 12.8612 4.43048 12.5358 4.75592L4.79171 12.5L3.95837 16.0417Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
  </svg>
);

export default EditIcon;
