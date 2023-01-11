import createMonth from "./createMonth";
import { DAYS_COUNT, WEEKS_COUNT } from "./utils/variables";

describe("createMonth()", () => {
  let monthElement: HTMLElement;

  beforeEach(() => {
    monthElement = createMonth(2022, 11);
  });

  it("returns element", () => {
    expect(monthElement).toBeInstanceOf(HTMLElement);
    expect(monthElement.classList.contains("month")).toBeTruthy();
  });

  it("consists of weeks and days", () => {
    expect(monthElement.querySelectorAll(".day").length).toBe(DAYS_COUNT);
    expect(monthElement.querySelectorAll(".week").length).toBe(WEEKS_COUNT);
  });
});
