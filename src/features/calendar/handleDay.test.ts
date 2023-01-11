import renderCalendar from "./renderCalendar";
import { openModal } from "../../common/modalWindow";
import createAddForm from "../../common/tasks/createAddForm";

jest.mock("../../common/modalWindow");
jest.mock("../../common/tasks/createAddForm");

describe("handleDay()", () => {
  let dayEl: HTMLElement;

  beforeEach(() => {
    const root = document.createElement("div");
    document.body.append(root);
    renderCalendar(root);
    dayEl = document.querySelector(".day")!;
    dayEl.click();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("opens modal window on click", () => {
    expect(openModal).toHaveBeenCalled();
  });

  it("modal window has addForm", () => {
    const date = new Date(dayEl.getAttribute("date")!);
    expect(createAddForm).toHaveBeenCalledWith(date);
  });
});
