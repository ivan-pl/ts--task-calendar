import getQueryParams from "./getQueryParams";

describe("getQueryParams", () => {
  it("returns {}", () => {
    window.location.hash = "";
    expect(getQueryParams()).toEqual({});
  });

  it("returns {month: 4, year: 2022}", () => {
    const expectedValue = { month: 4, year: 2022 };
    window.location.hash = "/?month=4&year=2022";
    expect(getQueryParams()).toEqual(expectedValue);
    window.location.hash = "/calendar?month=4&year=2022";
    expect(getQueryParams()).toEqual(expectedValue);
  });
});
