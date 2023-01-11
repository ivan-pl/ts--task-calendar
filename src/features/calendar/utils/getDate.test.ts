import getDate from "./getDate";

describe("getDate", () => {
  it("returns current date", () => {
    window.location.hash = "";
    const curDate = new Date();
    const { month, year } = getDate();
    expect(month).toBe(curDate.getMonth());
    expect(year).toBe(curDate.getFullYear());
  });

  it("returns {year: 2022, month: 10}", () => {
    window.location.hash = "/calendar?month=10&year=2022";
    const { month, year } = getDate();
    expect(month).toBe(10);
    expect(year).toBe(2022);
  });
});
