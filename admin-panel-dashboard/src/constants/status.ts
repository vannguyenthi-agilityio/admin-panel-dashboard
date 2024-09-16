type StatusType = {
  [key: number]: string;
  0: string;
  1: string;
  2: string;
};

export const STATUS: StatusType = {
  0: "Approved",
  1: "Blocked",
  2: "Rejected",
};
