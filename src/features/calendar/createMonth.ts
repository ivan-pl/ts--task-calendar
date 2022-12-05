import createElement from "../../common/utils/createElement";
import createWeek from "./createWeek";

export default function createMonth(arrOfWeeks: Date[][]): HTMLElement {
  const monthElement = createElement("div", "week");
  for (const week of arrOfWeeks) {
    monthElement.append(createWeek(week));
  }

  return monthElement;
}
