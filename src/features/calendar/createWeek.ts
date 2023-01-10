import createElement from "../../common/utils/createElement";
import handleDay from "./handleDay";

export function createDay(date: Date): HTMLElement {
  const innerHTML = `
    <span class="day__date">${date.getDate()}</span>
    <div class="day__tasks"></div>
  `;
  const day = createElement("div", "day", { date: date.toString() }, innerHTML);

  return day;
}

export default function createWeek(
  week: Date[],
  currentMonth: number
): HTMLElement {
  const weekElement = createElement("div", "week");
  for (let i = 0; i < week.length; i++) {
    const date = week[i];
    const dayEl = createDay(date);
    if (date.getMonth() !== currentMonth) {
      dayEl.classList.add("day--gray");
    }

    dayEl.addEventListener("click", () => handleDay(date));
    weekElement.append(dayEl);
  }

  return weekElement;
}
