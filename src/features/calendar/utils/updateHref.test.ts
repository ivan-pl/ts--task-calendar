import updateHref from "./updateHref";

describe("updateHref()", () => {
  it("returns /calendar?year=2022&month=10", () => {
    const month = 10;
    const year = 2022;
    const expectedValue = `/calendar?year=${year}&month=${month}`;
    expect(updateHref("/calendar", year, month)).toBe(expectedValue);
    expect(updateHref("/calendar?year=2033&month=2", year, month)).toBe(
      expectedValue
    );
    expect(
      updateHref("/calendar?year=2021&month=1&filter=32", year, month)
    ).toBe(`${expectedValue}&filter=32`);
  });

  it("returns /calendar?year=2023&month=0", () => {
    expect(updateHref("/calendar", 2022, 12)).toBe(
      "/calendar?year=2023&month=0"
    );
    expect(updateHref("/calendar?year=2021&month=", 2022, 12)).toBe(
      "/calendar?year=2023&month=0"
    );
  });

  it("returns /calendar?year=2022&month=11", () => {
    expect(updateHref("/calendar?year=2023&month=1", 2023, -1)).toBe(
      "/calendar?year=2022&month=11"
    );
  });
});
