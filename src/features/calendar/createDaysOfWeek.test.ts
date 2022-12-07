import createDaysOfWeek from "./createDaysOfWeek";

describe("createDaysOfWeek()", () => {
  let el: HTMLElement;
  beforeEach(() => {
    el = createDaysOfWeek();
  });

  it("returns element", () => {
    expect(el).toBeInstanceOf(HTMLElement);
  });

  it("has layout", () => {
    const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const dayTextArr = Array.from(
      el.querySelectorAll(".day-of-week") as NodeListOf<HTMLElement>
    ).map((day) => day.innerText);

    expect(dayTextArr).toEqual(daysOfWeek);
    expect(el.classList.contains("legend")).toBeTruthy();
  });
});
