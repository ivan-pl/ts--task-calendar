import { format } from "date-fns";
import createElement from "../utils/createElement";

const TEMPLATE = `
  <input id="new-task__date" class="new-task__date" type="date" />
  <input id="new-task__description" class="new-task__description" placeholder="Enter a task description" autocomplete="off" />
  <select name="tag" id="new-task__tag"> 
    <option value="">--Please choose an option--</option>
    <option value="Work">Work</option>
    <option value="Study">Study</option>
    <option value="Leisure">Leisure</option>
    <option value="Other">Other</option>
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

  return form;
}
