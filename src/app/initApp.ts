import { HashRouter } from "some-router";

import { renderNavbar } from "../features/navbar";
import { renderCalendar } from "../features/calendar";
import { renderAbout } from "../features/about";
import { renderList } from "../features/list";
import { LinkNames } from "../features/navbar/types";
import setActive from "../features/navbar/setActive";

export default function initApp(
  navRoot: HTMLElement,
  appRoot: HTMLElement
): void {
  renderNavbar(navRoot);

  const router = new HashRouter();
  router.on("/", {
    onEnter: async () => {
      renderCalendar(appRoot);
      setActive(LinkNames.Calendar);
    },
  });
  router.on("/calendar", {
    onEnter: async () => {
      renderCalendar(appRoot);
      setActive(LinkNames.Calendar);
    },
  });
  router.on("/about", {
    onEnter: async () => {
      renderAbout(appRoot);
      setActive(LinkNames.About);
    },
  });
  router.on("/list", {
    onEnter: async () => {
      renderList(appRoot);
      setActive(LinkNames.List);
    },
  });

  router.go(location.hash.replace("#", ""), {});
}
