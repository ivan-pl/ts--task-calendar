import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import getQueryParams from "../../../common/utils/getQueryParams";

interface ReturnedDate {
  year: number;
  month: number;
}

export default function getDate(): ReturnedDate {
  let { year, month } = getQueryParams();
  if (!year || !month) {
    year = getYear(Date.now());
    month = getMonth(Date.now());
  }
  return { year, month };
}
