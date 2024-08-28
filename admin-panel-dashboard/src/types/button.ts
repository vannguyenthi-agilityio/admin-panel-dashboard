import {  type ComponentPropsWithRef, ReactNode } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { buttonStyles } from '@/components/commons/Button/style';

type ButtonElementProps = ComponentPropsWithRef<'button'>;

export interface IButton
  extends ButtonElementProps,
    VariantProps<typeof buttonStyles> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
}
