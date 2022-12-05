import eachDayOfInterval from "date-fns/eachDayOfInterval";
import add from "date-fns/add";
import to2DArray from "./to2DArray";
import { DAYS_IN_WEEK, DAYS_COUNT } from "./variables";

export function getStartDate(year: number, month: number): Date {
  const curDate = new Date(year, month);

  while (curDate.getDay() !== 1) {
    curDate.setDate(curDate.getDate() - 1);
  }

  return curDate;
}

export default function getDatesArray(year: number, month: number): Date[][] {
  const start = getStartDate(year, month);
  const end = add(start, { days: DAYS_COUNT - 1 });
  return to2DArray(eachDayOfInterval({ start, end }), DAYS_IN_WEEK);
}
