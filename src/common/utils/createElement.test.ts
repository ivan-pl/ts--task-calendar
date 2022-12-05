import createElement from "./createElement";

describe("createElement()", () => {
  it("returns div", () => {
    const el = createElement("div");
    expect(el.matches("div")).toBeTruthy();
  });

  it("adds class", () => {
    const className = "test-class";
    const el = createElement("div", className);
    expect(el.classList.contains(className)).toBeTruthy();
  });

  it("sets attribute", () => {
    const attribute = { "test-attr": "some-value" };
    const el = createElement("div", null, attribute);
    expect(el.getAttribute("test-attr")).toBe(attribute["test-attr"]);
  });

  it("adds innerHTML", () => {
    const innerHTML = `<div>content</div>`;
    const el = createElement("div", null, null, innerHTML);
    expect(el.innerHTML).toBe(innerHTML);
  });
});
