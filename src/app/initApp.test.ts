import initApp from "./initApp";
import { renderNavbar } from "../features/navbar";
import { renderCalendar } from "../features/calendar";

jest.mock("../features/navbar");
jest.mock("../features/calendar");

describe("initApp", () => {
  it("renders navbar and calendar", () => {
    const header = document.createElement("header");
    const main = document.createElement("main");
    initApp(header, main);
    expect(renderNavbar).toHaveBeenCalledWith(header);
    expect(renderCalendar).toHaveBeenCalledWith(main);
  });
});
