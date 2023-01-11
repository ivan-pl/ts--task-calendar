import renderAbout from "./renderAbout";

describe("renderAbout()", () => {
  it("renders About", () => {
    const root = document.createElement("div");
    renderAbout(root);
    const aboutElement = root.querySelector(".about") as HTMLElement;
    expect(aboutElement).toBeInstanceOf(HTMLElement);
    expect(aboutElement.innerHTML).toBe("About page");
  });
});
