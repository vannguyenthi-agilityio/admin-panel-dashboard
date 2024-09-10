// Types
import { OptionType, IItemBreadcrumb } from "@/types";

export const MONTHS: OptionType[] = [
  {
    option: "January",
    value: "0",
  },
  {
    option: "February",
    value: "1",
  },
  {
    option: "March",
    value: "2",
  },
  {
    option: "April",
    value: "3",
  },
  {
    option: "May",
    value: "4",
  },
  {
    option: "June",
    value: "5",
  },
  {
    option: "July",
    value: "6",
  },
  {
    option: "August",
    value: "7",
  },
  {
    option: "September",
    value: "8",
  },
  {
    option: "October",
    value: "9",
  },
  {
    option: "November",
    value: "10",
  },
  {
    option: "December",
    value: "11",
  },
];

export const PAGINATION : OptionType[] = [
  {
    option: 1,
    value: "1",
  },
  {
    option: 2,
    value: "2",
  },
  {
    option: 3,
    value: "3",
  },
  {
    option: 4,
    value: "4",
  },
  {
    option: 5,
    value: "5",
  },
  {
    option: 6,
    value: "6",
  },
  {
    option: 7,
    value: "7",
  },
  {
    option: 8,
    value: "8",
  },
  {
    option: 9,
    value: "9",
  },
  {
    option: 10,
    value: "10",
  },
  {
    option: 11,
    value: "11",
  },
]

export const ITEM_BREADCRUMB: IItemBreadcrumb[] = [
  {
    href: "/",
    crumbName: "DashBoard",
    linkActiveCrumb: false,
    linkIndex: 1
  },
  {
    href: "/",
    crumbName: "Customers’ List",
    linkActiveCrumb: true,
    linkIndex: 2
  }
]

export const ICON_ITEM_BREADCRUMB: IItemBreadcrumb[] = [
  {
    href: "/",
    crumbName: "DashBoard",
    linkActiveCrumb: false,
    linkIndex: 1,
    iconElement: <span className="mr-1">👉</span>,
  },
  {
    href: "/",
    crumbName: "Customers’ List",
    linkActiveCrumb: true,
    linkIndex: 2,
    iconElement: <span className="mr-1">👉</span>,
  }
]

export const RESULT_NOT_FOUND = "Result Not Found";

export const WINDOW_INNER_WIDTH = window.innerWidth;
