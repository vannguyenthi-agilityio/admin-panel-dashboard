// Helpers
import { clsxMerge } from '@/helpers';

// Types
import { SIZE_TYPE } from '@/types'

import { notFoundStyles } from './style';

interface INotFound {
  message?: string;
  className?: string;
  size?: SIZE_TYPE;
}

const NotFound = ({ message="Not Found", className, size }: INotFound) => (
  <div
    className={clsxMerge(
      notFoundStyles({ 
        size,
      }),
      className
    )}
  >
    <p className="font-bold">{message.toString()}</p>
  </div>
);

export default NotFound;
