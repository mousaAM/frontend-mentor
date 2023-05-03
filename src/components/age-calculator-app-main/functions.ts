import { dates } from "./rules";
import { errors } from "./errors";

export const ValidDays = (year: number, month: number, days: number) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDay();

  if (days > 31) {
    return errors.invalidDays;
  }

  if (year === currentYear && month > currentMonth) {
    return errors.mustBeInPast;
  }

  if (year === currentYear && month === currentMonth && days > currentDay) {
    return errors.mustBeInPast;
  }

  if (month != 2) {
    if (days > dates[month]) {
      return errors.invalidDays;
    }
  } else {
    if (year % 4 === 0) {
      if (days > 29) {
        return errors.invalidDays;
      }
    } else {
      if (days > dates[month]) {
        return errors.invalidDays;
      }
    }
  }

  return 1;
};

export const ValidMonth = (year: number, month: number) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (month > 12) {
    return errors.invalidMonth;
  } else if (year === currentYear && month > currentMonth) {
    return errors.mustBeInPast;
  }

  return 1;
};

export const ValidYear = (year: number) => {
  const currentYear = new Date().getFullYear();
  if (year > currentYear) {
    return errors.mustBeInPast;
  }

  return 1;
};

export const CalculateAge = (
  yearOfBirth: number,
  monthOfBirth: number,
  dayOfBirth: number
): { years: number; months: number; days: number } => {
  const today = new Date();
  const birthDate = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
    if (ageDays < 0) {
      const prevMonthLastDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      ageDays += prevMonthLastDay;
      ageMonths--;
    }
  } else if (ageDays < 0) {
    const prevMonthLastDay = new Date(
      birthDate.getFullYear(),
      birthDate.getMonth(),
      0
    ).getDate();
    ageDays += prevMonthLastDay;
    ageMonths--;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
};
