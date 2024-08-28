import { COLOR } from '@/constants';
import { IIcon } from '@/types';

const UserIcon: React.FC<IIcon> = ({
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
    <path d="M11.75 10C13.8288 10 14.6802 12.1479 15.0239 13.696C15.2095 14.532 14.5333 15.25 13.6769 15.25H12.75M10.75 6.25C12.2688 6.25 13.25 5.01878 13.25 3.5C13.25 1.98122 12.2688 0.75 10.75 0.75M1.78167 15.25H9.21829C9.78279 15.25 10.227 14.7817 10.1145 14.2285C9.80399 12.7012 8.78969 10 5.49999 10C2.2103 10 1.19604 12.7012 0.885478 14.2285C0.772988 14.7817 1.21717 15.25 1.78167 15.25ZM8.24999 3.5C8.24999 5.01878 7.01877 6.25 5.49999 6.25C3.98121 6.25 2.74999 5.01878 2.74999 3.5C2.74999 1.98122 3.98121 0.75 5.49999 0.75C7.01877 0.75 8.24999 1.98122 8.24999 3.5Z" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default UserIcon;
