import { memo, ReactNode } from "react";

// Helpers
import { clsxMerge } from '@/helpers';

// Components
import { Button } from "@/components";
import { CloseIcon } from "@/components/Icons";

// Styles
import { modalStyles } from './style';

interface IModal {
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
  showIconClose?: boolean;
  labelButton?: string;
  title?:string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Modal = ({
  isOpen,
  onClose,
  children,
  showIconClose = false,
  labelButton = "",
  title = "Modal title",
  className,
  size,
}: IModal) => (
    <div onClick={onClose}
      className={`fixed inset-0 flex min-h-[100px] justify-center items-center transition-colors ${isOpen ? "visible bg-black/20" : "invisible"}`}
    >
    {/* modal */}
    <div
      className={clsxMerge(
        modalStyles({
          size
        }),
        `${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`,
        className
      )}
      >
      {/* <!--Modal title--> */}
      <div className="flex flex-shrink-0 flex-wrap items-center justify-start rounded-t-md border-b-2 mb-2 border-neutral-100 border-opacity-100 py-4">
        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
          {title}
        </h5>
      </div>
      {/* <!--Close button--> */}
      { showIconClose &&
        <Button
          onClick={onClose}
          className="absolute top-5 right-5 w-[40px] h-[40px] p-0 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          leftIcon={<CloseIcon stroke="black"/>}
        />
      }
      {/* <!--Modal body--> */}
      {children}
      {/* <!--Modal footer--> */}
      <div className="flex flex-shrink-0 gap-3 flex-wrap items-center justify-end rounded-b-md border-t-2 mt-2 border-neutral-100 border-opacity-100 pt-4">
        <Button
          onClick={onClose}
          label='Cancel'
        />
        {labelButton &&
          <Button
            onClick={onClose}
            size='small'
            label={labelButton}
            buttonType='blood'
          />
        }
      </div>
    </div>
  </div>
);

export default memo(Modal);
