import { createModal, openModal, closeModal } from "./modal";

describe("createModal", () => {
  let modal: HTMLElement;

  beforeEach(() => {
    const root = document.createElement("div");
    modal = createModal(root);
    document.body.append(root);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("adds modal elements", () => {
    const modalWindow = document.getElementById("modal") as HTMLElement;
    expect(modalWindow).toBeInstanceOf(HTMLElement);
    expect(modalWindow.classList.contains("hidden")).toBeTruthy();
    expect(modalWindow.classList.contains("modal")).toBeTruthy();

    const overlay = document.getElementById("overlay") as HTMLElement;
    expect(overlay).toBeInstanceOf(HTMLElement);
    expect(overlay.classList.contains("overlay")).toBeTruthy();
  });

  it("returns modal element", () => {
    expect(modal.classList.contains("modal")).toBeTruthy();
    expect(modal).toBeInstanceOf(HTMLElement);
  });
});

describe("openModal", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("shows modal window", () => {
    const root = document.createElement("div");
    const modal = createModal(root);
    document.body.append(root);
    const overlay = document.getElementById("overlay") as HTMLElement;

    expect(modal.classList.contains("hidden")).toBeTruthy();
    expect(overlay.classList.contains("hidden")).toBeTruthy();

    openModal();
    expect(modal.classList.contains("hidden")).toBeFalsy();
    expect(overlay.classList.contains("hidden")).toBeFalsy();
  });
});

describe("closeModal", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("shows modal window", () => {
    const root = document.createElement("div");
    const modal = createModal(root);
    document.body.append(root);
    const overlay = document.getElementById("overlay") as HTMLElement;
    openModal();
    closeModal();

    expect(modal.classList.contains("hidden")).toBeTruthy();
    expect(overlay.classList.contains("hidden")).toBeTruthy();
  });
});
