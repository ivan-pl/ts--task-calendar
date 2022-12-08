import { LinkNames } from "./types";

const activeClass = "nav__link--active";

export default function setActive(linkName: LinkNames): void {
  Array.from(document.getElementsByClassName(activeClass)).forEach((el) =>
    el.classList.remove(activeClass)
  );
  document.getElementById(linkName)?.classList.add(activeClass);
}
