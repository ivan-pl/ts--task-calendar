/* eslint no-param-reassign: ["error", { "props": false }] */
import createMonth from "./createMonth";
import createElement from "../../common/utils/createElement";
import createDaysOfWeek from "./createDaysOfWeek";
import createMonthSwitch from "./createMonthSwitch";
import getDate from "./utils/getDate";
import "./calendar.scss";

function renderCalendar(root: HTMLElement): void {
  const { year, month } = getDate();
  const calendar = createElement("section", "calendar");
  calendar.append(createMonthSwitch(year, month));
  calendar.append(createDaysOfWeek());
  calendar.append(createMonth(year, month));
  root.innerHTML = "";
  root.append(calendar);
}

export default renderCalendar;
