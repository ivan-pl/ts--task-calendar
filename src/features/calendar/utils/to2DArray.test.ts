import to2DArray from "./to2DArray";

describe("to2DArray", () => {
  it("returns 6x7 array", () => {
    const inputArr = Array.from({ length: 42 }, (_, i) => i);
    const expectedArr = [];
    for (let i = 0; i < 42; i += 7) {
      expectedArr.push(Array.from({ length: 7 }, (_, j) => j + i));
    }
    expect(to2DArray(inputArr, 7)).toEqual(expectedArr);
  });

  it("returns 4x7 array", () => {
    const inputArr = Array.from({ length: 28 }, (_, i) => i);
    const expectedArr = [];
    for (let i = 0; i < 28; i += 7) {
      expectedArr.push(Array.from({ length: 7 }, (_, j) => j + i));
    }
    expect(to2DArray(inputArr, 7)).toEqual(expectedArr);
  });
});
