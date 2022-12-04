import renderCalendar from "./renderCalendar";

describe("renderCalendar()", () => {
  it("renders Calendar", () => {
    const root = document.createElement("div");
    renderCalendar(root);
    const calendarElement = root.querySelector(".calendar") as HTMLElement;
    expect(calendarElement).toBeInstanceOf(HTMLElement);
    expect(calendarElement.innerHTML).toBe("Calendar page");
  });
});
