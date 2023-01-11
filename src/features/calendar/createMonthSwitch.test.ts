import { format } from "date-fns";
import createMonthSwitch from "./createMonthSwitch";

describe("createMonthSwitch()", () => {
  let monthSwitch: HTMLElement;
  const date = new Date(2022, 10);

  beforeEach(() => {
    monthSwitch = createMonthSwitch(date.getFullYear(), date.getMonth());
  });

  it("returns HTMLElement", () => {
    expect(monthSwitch).toBeInstanceOf(HTMLElement);
    expect(monthSwitch.classList.contains("month-switch")).toBeTruthy();
  });

  it("has layout", () => {
    expect(monthSwitch.querySelector(".prev-month")).toBeInstanceOf(
      HTMLAnchorElement
    );

    expect(monthSwitch.querySelector(".next-month")).toBeInstanceOf(
      HTMLAnchorElement
    );

    expect(
      (monthSwitch.querySelector(".month-details") as HTMLElement).innerHTML
    ).toBe(format(date, "MMMM yyyy"));
  });

  it("has correct links", () => {
    const prevMonth = monthSwitch.querySelector(
      ".prev-month"
    ) as HTMLAnchorElement;
    let params = new URLSearchParams(prevMonth.href.match(/\?.+$/i)?.[0]);
    expect(params.get("month")).toBe((date.getMonth() - 1).toString());
    expect(params.get("year")).toBe(date.getFullYear().toString());

    const nextMonth = monthSwitch.querySelector(
      ".next-month"
    ) as HTMLAnchorElement;
    params = new URLSearchParams(nextMonth.href.match(/\?.+$/i)?.[0]);
    expect(params.get("month")).toBe((date.getMonth() + 1).toString());
    expect(params.get("year")).toBe(date.getFullYear().toString());
  });
});
