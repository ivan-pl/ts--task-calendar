import { format } from "date-fns";
import { addTask } from "./tasksSlice";
import createElement from "../utils/createElement";
import { store } from "../../app";
import EStatus from "../localStorageController/types/status";
import ETag from "../localStorageController/types/tag";

const TEMPLATE = `
  <input id="new-task__date" class="new-task__date" type="date" />
  <input id="new-task__description" class="new-task__description" placeholder="Enter a task description" autocomplete="off" />
  <select name="tag" id="new-task__tag"> 
    <option value="Other">Other</option>
    <option value="Work">Work</option>
    <option value="Study">Study</option>
    <option value="Leisure">Leisure</option>
  </select >
  <select name="status" id="new-task__status"> 
    <option value="In progress">In progress</option>
    <option value="Pending" selected>Pending</option>
    <option value="Done">Done</option>
  </select >
  <button type="button" disabled class="new-task__add" id="new-task__add">Add</button>
`;

export default function createAddForm(
  date: Date = new Date()
): HTMLFormElement {
  const form = createElement("form", "new-task", null, TEMPLATE, "new-task");
  const dateInput = form.querySelector("#new-task__date") as HTMLInputElement;
  dateInput.value = format(date, "yyyy-MM-dd");

  const button = form.querySelector("#new-task__add") as HTMLButtonElement;
  const descInput = form.querySelector(
    "#new-task__description"
  ) as HTMLInputElement;

  descInput.addEventListener("input", () => {
    button.disabled = !descInput.value;
  });
  button.addEventListener("click", handleClick);

  return form;
}

function handleClick() {
  const date = new Date(
    (document.querySelector("#new-task__date") as HTMLInputElement).value
  );
  const description = (
    document.querySelector("#new-task__description") as HTMLInputElement
  ).value;
  const status = (
    document.querySelector("#new-task__status") as HTMLInputElement
  ).value as EStatus;
  const tag = (document.querySelector("#new-task__tag") as HTMLInputElement)
    .value as ETag;

  store.dispatch(addTask({ date, description, status, tag }));
}
