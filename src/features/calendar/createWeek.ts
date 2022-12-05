export function createDay(date: Date): HTMLElement {
  const day = document.createElement("div");
  day.classList.add("day");
  day.setAttribute("date", date.toString());
  day.innerHTML = `
    <span class="day__date">${date.getDate()}</span>
    <div class="day__tasks"></div>
  `;

  return day;
}

export default function createWeek(week: Date[]): HTMLElement {
  const weekElement = document.createElement("div");
  weekElement.classList.add("week");
  for (let i = 0; i < week.length; i++) {
    weekElement.append(createDay(week[i]));
  }

  return weekElement;
}
