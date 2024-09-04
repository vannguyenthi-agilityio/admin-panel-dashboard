import { type ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";

import { breadcrumbStyles } from '@/components/commons/Breadcrumb/style';

export interface IItemBreadcrumb {
  href: string;
  crumbName: string;
  linkActiveCrumb: boolean;
  linkIndex: number;
  iconElement?: React.ReactNode;
}

export interface IBreadcrumb
  extends Omit<ComponentProps<"nav">, "size">,
    Omit<VariantProps<typeof breadcrumbStyles>, "iconElement">  {
  itemsBreadcrumb?: IItemBreadcrumb[];
}
