import { VariantProps } from "class-variance-authority";

import { sidebarStyles } from '@/components/Sidebar/style';

export interface ISidebar
  extends Omit<VariantProps<typeof sidebarStyles>, "">  {
  className?: string;
  pathname: string;
  isCollapse: boolean;
  toggleSidebar: () => void;
}
