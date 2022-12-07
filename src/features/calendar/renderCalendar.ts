/* eslint no-param-reassign: ["error", { "props": false }] */
import createMonth from "./createMonth";
import createElement from "../../common/utils/createElement";
import createDaysOfWeek from "./createDaysOfWeek";
import "./calendar.scss";

function renderCalendar(root: HTMLElement): void {
  const calendar = createElement("section", "calendar");
  calendar.append(createDaysOfWeek());
  calendar.append(createMonth(2022, 11));
  root.innerHTML = "";
  root.append(calendar);
}

export default renderCalendar;
