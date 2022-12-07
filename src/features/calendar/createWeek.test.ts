import eachDayOfInterval from "date-fns/eachDayOfInterval";
import createWeek, { createDay } from "./createWeek";

describe("createDay", () => {
  let date: Date;
  let dayElement: HTMLElement;
  beforeEach(() => {
    date = new Date(2022, 11);
    dayElement = createDay(date);
  });

  it("returns div with date attribute", () => {
    expect(dayElement.getAttribute("date")).toBe(date.toString());
  });

  it("has layout", () => {
    const day = dayElement.querySelector(".day__date") as HTMLElement;
    const taskContainer = dayElement.querySelector(".day__tasks");
    expect(dayElement.classList.contains("day")).toBeTruthy();
    expect(day.innerHTML).toBe(date.getDate().toString());
    expect(taskContainer).toBeInstanceOf(HTMLElement);
  });
});

describe("createWeek()", () => {
  it("creates container with dayElements", () => {
    const week = eachDayOfInterval({
      start: new Date(2022, 11, 1),
      end: new Date(2022, 11, 7),
    });
    const weekElement = createWeek(week, 11);

    const dayElements = weekElement.querySelectorAll(".day");
    expect(dayElements.length).toBe(7);
    dayElements.forEach((day, i) => {
      expect(day.getAttribute("date")).toBe(week[i].toString());
    });
  });
});
