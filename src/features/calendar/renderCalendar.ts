/* eslint no-param-reassign: ["error", { "props": false }] */
import createMonth from "./createMonth";
import createElement from "../../common/utils/createElement";
import "./calendar.scss";

function renderCalendar(root: HTMLElement): void {
  const calendar = createElement("section", "calendar");
  const month = createMonth(2022, 11);
  calendar.append(month);
  root.append(calendar);
}

export default renderCalendar;
