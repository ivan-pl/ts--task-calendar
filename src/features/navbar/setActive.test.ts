import setActive from "./setActive";
import renderNavbar from "./renderNavbar";
import createElement from "../../common/utils/createElement";
import { LinkNames } from "./types";

describe("setActive", () => {
  it("removes active state from all links and sets to calendar", () => {
    const root = createElement("div");
    document.body.append(root);
    renderNavbar(root);
    setActive(LinkNames.Calendar);

    const calendarLink = document.getElementById(
      LinkNames.Calendar
    ) as HTMLAnchorElement;
    expect(calendarLink.classList.contains("nav__link--active")).toBeTruthy();

    const otherLinks = Array.from(
      document.querySelectorAll(".nav__link")
    ).filter((link) => link !== calendarLink);
    expect(otherLinks.length).toBe(2);
    otherLinks.forEach((link) =>
      expect(link.classList.contains("nav__link--active")).toBeFalsy()
    );
  });
});
