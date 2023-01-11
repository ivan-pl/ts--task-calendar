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

  it("supports array of classes", () => {
    const classes = ["classA", "classB"];
    const el = createElement("div", classes);
    expect([...el.classList]).toEqual(classes);
  });

  it("adds id", () => {
    const id = "uid";
    const el = createElement("div", null, null, null, id);
    expect(el.id).toBe(id);
  });
});
