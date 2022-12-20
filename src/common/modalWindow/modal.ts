import createElement from "../utils/createElement";

export function createModal(root: HTMLElement): HTMLElement {
  const modal = createElement(
    "section",
    ["modal", "hidden"],
    null,
    null,
    "modal"
  );

  const overlay = createElement(
    "div",
    ["overlay", "hidden"],
    null,
    null,
    "overlay"
  );

  root.append(modal, overlay);
  return modal;
}

export function openModal(): void {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  modal?.classList.remove("hidden");
  overlay?.classList.remove("hidden");
}

export function closeModal(): void {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");

  modal?.classList.add("hidden");
  overlay?.classList.add("hidden");
}
