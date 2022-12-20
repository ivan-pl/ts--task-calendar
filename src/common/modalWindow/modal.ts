/* eslint-disable no-use-before-define */
import createElement from "../utils/createElement";

export function createModal(root: HTMLElement): HTMLElement {
  const modal = createElement(
    "section",
    ["modal", "hidden"],
    null,
    null,
    "modal"
  );

  const closeButton = createElement("button", "modal__close", null, "⨉");
  closeButton.addEventListener("click", closeModal);
  const modalContainer = createElement(
    "div",
    "modal__container",
    null,
    null,
    "modal__container"
  );
  modal.append(closeButton, modalContainer);

  const overlay = createElement(
    "div",
    ["overlay", "hidden"],
    null,
    null,
    "overlay"
  );
  overlay.addEventListener("click", closeModal);

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

export function setLayout(el: HTMLElement): void {
  const modalContainer = document.getElementById("modal__container");
  if (modalContainer) {
    modalContainer.innerHTML = "";
  }
  modalContainer?.append(el);
}
