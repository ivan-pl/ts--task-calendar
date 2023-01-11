import { DAYS_OF_WEEK } from "./utils/variables";

export default function createDaysOfWeek(): HTMLElement {
  const week = document.createElement("div");
  week.classList.add("legend");
  for (const dayName of DAYS_OF_WEEK) {
    const day = document.createElement("div");
    day.innerText = dayName;
    day.classList.add("day-of-week");
    week.append(day);
  }

  return week;
}
