import renderNavbar from "./renderNavbar";

describe("renderNavbar()", () => {
  it("renders navigation", () => {
    const root = document.createElement("div");
    renderNavbar(root);
    const navbarElement = root.querySelector(".nav") as HTMLElement;
    expect(navbarElement).toBeInstanceOf(HTMLElement);

    const anchors = navbarElement.querySelectorAll(
      ".nav__link"
    ) as NodeListOf<HTMLAnchorElement>;
    expect(anchors.length).toBe(3);
    const tabs = ["Calendar", "List", "About"];
    anchors.forEach((anchor, ind) => expect(anchor.innerHTML).toBe(tabs[ind]));
  });
});
