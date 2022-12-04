import { renderNavbar } from "../features/navbar";
import { renderCalendar } from "../features/calendar";

export default function initApp(
  navRoot: HTMLElement,
  appRoot: HTMLElement
): void {
  renderNavbar(navRoot);
  renderCalendar(appRoot);
}
