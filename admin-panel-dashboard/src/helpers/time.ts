import dayjs from "dayjs";

import { OptionType } from "@/types";

// Constants
import { MESSAGES_ERROR } from "@/constants";

// Types
import { BirthDay } from "@/types";

import toObject from "dayjs/plugin/toObject";
import objectSupport from "dayjs/plugin/objectSupport";

dayjs.extend(toObject);
dayjs.extend(objectSupport);


/**
 *  The function handles render time
 *
 * @param start - the start time
 * @param end - the end time
 * @returns - Outputs the time from start time to end time (option of select)
 *
 * Ex: start = 1, end = 10 => the time renders 1->10
 */
export const generateTimes = (start: number, end: number): OptionType[] => {
  const times: OptionType[] = [];

  for (let i = start; i <= end; i++) {
    times.push({ option: i.toString(), value: i.toString() });
  }

  return times;
};

/**
 * Generates an array of days for a given month and year.
 * @param {number} month - The month (1-12).
 * @param {number} year - The year.
 * @returns {Date[]} An array of Date objects representing the days of the specified month.
 */
export const generateDays = (month: number, year: number) => {
  return generateTimes(1, new Date(year, month, 0).getDate());
};

/**
 *
 * The function handler check greater than the current time
 *
 * @param value - the value birth date
 * @returns - If the birth date > the current date -> error. Opposite, it will true
 */
export const validateBirthDate = (value: BirthDay): string | true => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const birthDateValue: BirthDay = {
    months: currentMonth,
    date: currentDay,
    years: currentYear,
    hours: 15,
    minutes: 50,
    seconds: 15,
    milliseconds: 1,
  };
  const { date, months, years } = value ?? birthDateValue;
  const birthDate = new Date(years, Number(months), date);

  if (!date || !months || !years) return MESSAGES_ERROR.FIELD_REQUIRED;

  return birthDate <= currentDate || MESSAGES_ERROR.INVALID_BIRTH_DATE;
};

/**
 *
 * Function to convert from Date to object
 *
 * @param time - the value from api returns
 * @returns - object {date,month,years,...}
 */
export const convertDateTimeToObject = (time: string): BirthDay => {
  const object = dayjs(time).toObject();

  return {
    ...object,
    months: object.months,
    date: object.date,
    years: object.years,
  };
};

export const convertDateToDateTime = (object: BirthDay, token: string) => {
  const dateFormat =  dayjs(object).format(token);
  return dateFormat;
};
