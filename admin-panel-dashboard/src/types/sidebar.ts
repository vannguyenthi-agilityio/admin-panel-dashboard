export interface ISidebar {
  className?: string;
  pathname: string;
  isCollapse: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  toggleSidebar: () => void;
}
