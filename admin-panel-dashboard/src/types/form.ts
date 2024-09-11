
export interface BirthDay {
  months: number | string;
  date: number;
  years: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

export interface ICustomerData {
  id: string | number;
  firstName: string;
  lastName: string;
  idNumber: number;
  dateOfBirth: BirthDay;
  phoneNumber?: string;
  email: string;
}
