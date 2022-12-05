import createMonth from "./createMonth";
import getDatesArray from "./utils/getDatesArray";
import { DAYS_COUNT, WEEKS_COUNT } from "./utils/variables";

describe("createMonth()", () => {
  let arrOfWeeks: Date[][];
  let monthElement: HTMLElement;

  beforeEach(() => {
    arrOfWeeks = getDatesArray(2022, 11);
    monthElement = createMonth(arrOfWeeks);
  });

  it("returns element", () => {
    expect(monthElement).toBeInstanceOf(HTMLElement);
  });

  it("consists of weeks and days", () => {
    expect(monthElement.querySelectorAll(".day").length).toBe(DAYS_COUNT);
    expect(monthElement.querySelectorAll(".week").length).toBe(WEEKS_COUNT);
  });
});
