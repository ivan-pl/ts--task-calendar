import { openModal, setModalWindowLayout } from "../../common/modalWindow";
import createAddForm from "../../common/tasks/createAddForm";

function handleDay(date: Date): void {
  setModalWindowLayout(createAddForm(date));
  openModal();
}

export default handleDay;
