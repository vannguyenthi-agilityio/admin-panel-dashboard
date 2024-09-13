// Types
import { IItemBreadcrumb } from "@/types";

// Constants
import { ROUTES } from "@/constants";

export const ITEM_BREADCRUMB: IItemBreadcrumb[] = [
  {
    href: ROUTES.HOME,
    crumbName: "DashBoard",
    linkActiveCrumb: false,
    linkIndex: 1
  },
  {
    href: ROUTES.CUSTOMERS,
    crumbName: "Customers’ List",
    linkActiveCrumb: true,
    linkIndex: 2
  }
]

export const ITEM_BREADCRUMB_FORM: IItemBreadcrumb[] = [
  {
    href: ROUTES.HOME,
    crumbName: "DashBoard",
    linkActiveCrumb: false,
    linkIndex: 1
  },
  {
    href: ROUTES.CUSTOMERS,
    crumbName: "Customers’ List",
    linkActiveCrumb: false,
    linkIndex: 2
  },
  {
    href: `${ROUTES.CUSTOMERS}/form`,
    crumbName: "New Customer",
    linkActiveCrumb: true,
    linkIndex: 3
  }
]

export const ICON_ITEM_BREADCRUMB: IItemBreadcrumb[] = [
  {
    href: ROUTES.HOME,
    crumbName: "DashBoard",
    linkActiveCrumb: false,
    linkIndex: 1,
    iconElement: <span className="mr-1">👉</span>,
  },
  {
    href: ROUTES.CUSTOMERS,
    crumbName: "Customers’ List",
    linkActiveCrumb: true,
    linkIndex: 2,
    iconElement: <span className="mr-1">👉</span>,
  }
]
