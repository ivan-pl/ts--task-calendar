import sum from "./sum";

describe("sum()", () => {
  it("returns 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
