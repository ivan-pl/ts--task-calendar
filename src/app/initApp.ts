import { HashRouter } from "some-router";

import { renderNavbar } from "../features/navbar";
import { renderCalendar } from "../features/calendar";
import { renderAbout } from "../features/about";
import { renderList } from "../features/list";

export default function initApp(
  navRoot: HTMLElement,
  appRoot: HTMLElement
): void {
  renderNavbar(navRoot);

  const router = new HashRouter();
  router.on("/", {
    onEnter: async () => renderCalendar(appRoot),
  });
  router.on("/calendar", {
    onEnter: async () => renderCalendar(appRoot),
  });
  router.on("/about", {
    onEnter: async () => renderAbout(appRoot),
  });
  router.on("/list", {
    onEnter: async () => renderList(appRoot),
  });

  router.go(location.hash.replace("#", ""), {});
}
