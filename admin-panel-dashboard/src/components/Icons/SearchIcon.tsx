import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const SearchIcon = ({
  width = "12",
  height = "12",
  stroke = COLOR.SECONDARY[100],
  className
}: IIcon) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.8333 10.8333L8.33329 8.33332M1.16663 5.33332C1.16663 3.03214 3.03211 1.16666 5.33329 1.16666C7.63449 1.16666 9.49996 3.03214 9.49996 5.33332C9.49996 7.63452 7.63449 9.49999 5.33329 9.49999C3.03211 9.49999 1.16663 7.63452 1.16663 5.33332Z"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
