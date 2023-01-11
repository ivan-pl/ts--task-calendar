import renderList from "./renderList";

describe("renderList()", () => {
  it("renders List", () => {
    const root = document.createElement("div");
    renderList(root);
    const listElement = root.querySelector(".list") as HTMLElement;
    expect(listElement).toBeInstanceOf(HTMLElement);
    expect(listElement.innerHTML).toBe("List page");
  });
});
