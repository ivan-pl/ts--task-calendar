import createElement from "../../common/utils/createElement";
import getDatesArray from "./utils/getDatesArray";
import createWeek from "./createWeek";

export default function createMonth(year: number, month: number): HTMLElement {
  const arrOfWeeks = getDatesArray(year, month);
  const monthElement = createElement("div", "month");
  for (const week of arrOfWeeks) {
    monthElement.append(createWeek(week, month));
  }

  return monthElement;
}
