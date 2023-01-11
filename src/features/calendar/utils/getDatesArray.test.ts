import eachDayOfInterval from "date-fns/eachDayOfInterval";
import getDatesArray, { getStartDate } from "./getDatesArray";
import to2DArray from "./to2DArray";

describe("getStartDate", () => {
  it("returns 31 October 2022 for November 2022", () => {
    expect(getStartDate(2022, 10).getTime()).toBe(
      new Date(2022, 9, 31).getTime()
    );
  });

  it("returns 26 December 2022 for January 2023", () => {
    expect(getStartDate(2023, 0).getTime()).toBe(
      new Date(2022, 11, 26).getTime()
    );
  });
});

describe("getDatesArray()", () => {
  it("returns dates for November 2022", () => {
    const expectedResult = to2DArray(
      eachDayOfInterval({
        start: new Date(2022, 9, 31),
        end: new Date(2022, 11, 11),
      }),
      7
    );
    expect(getDatesArray(2022, 10)).toEqual(expectedResult);
  });
});
