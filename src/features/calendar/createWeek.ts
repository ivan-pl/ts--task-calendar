import createElement from "../../common/utils/createElement";

export function createDay(date: Date): HTMLElement {
  const innerHTML = `
    <span class="day__date">${date.getDate()}</span>
    <div class="day__tasks"></div>
  `;
  const day = createElement("div", "day", { date: date.toString() }, innerHTML);

  return day;
}

export default function createWeek(week: Date[]): HTMLElement {
  const weekElement = createElement("div", "week");
  for (let i = 0; i < week.length; i++) {
    weekElement.append(createDay(week[i]));
  }

  return weekElement;
}
