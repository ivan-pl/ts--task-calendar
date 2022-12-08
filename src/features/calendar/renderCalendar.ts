/* eslint no-param-reassign: ["error", { "props": false }] */
import createMonth from "./createMonth";
import createElement from "../../common/utils/createElement";
import createDaysOfWeek from "./createDaysOfWeek";
import createMonthSwitch from "./createMonthSwitch";
import "./calendar.scss";

function renderCalendar(root: HTMLElement): void {
  const calendar = createElement("section", "calendar");
  calendar.append(createMonthSwitch(2022, 11));
  calendar.append(createDaysOfWeek());
  calendar.append(createMonth(2022, 11));
  root.innerHTML = "";
  root.append(calendar);
}

export default renderCalendar;
