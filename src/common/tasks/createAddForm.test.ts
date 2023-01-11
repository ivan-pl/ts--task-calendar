import createAddForm from "./createAddForm";
import EStatus from "../localStorageController/types/status";

describe("createAddForm()", () => {
  const curDate = "2022-12-20";

  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date(curDate));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("returns Form", () => {
    expect(createAddForm()).toBeInstanceOf(HTMLFormElement);
  });

  it("has layout", () => {
    const form = createAddForm() as HTMLFormElement;
    expect(form.querySelector("#new-task__description")).toBeInstanceOf(
      HTMLInputElement
    );
    expect(form.querySelector("#new-task__tag")).toBeInstanceOf(
      HTMLSelectElement
    );
    expect(form.querySelector("#new-task__date")).toBeInstanceOf(
      HTMLInputElement
    );
    expect(form.querySelector("#new-task__status")).toBeInstanceOf(
      HTMLSelectElement
    );
    expect(form.querySelector("#new-task__add")).toBeInstanceOf(
      HTMLButtonElement
    );
  });

  it("has default values", () => {
    const form = createAddForm() as HTMLFormElement;

    const status = form.querySelector("#new-task__status") as HTMLSelectElement;
    expect(status.value).toBe(EStatus.PENDING);

    const date = form.querySelector("#new-task__date") as HTMLInputElement;
    expect(date.value).toBe(curDate);
  });

  it("sets date", () => {
    const newDate = "2024-11-23";
    const form = createAddForm(new Date(newDate));
    expect(
      (form.querySelector("#new-task__date") as HTMLInputElement).value
    ).toBe(newDate);
  });
});
