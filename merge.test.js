const mergeSort = require("./merge");

describe("#mergeSort", () => {
  test("even array", () => {
    const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
    mergeSort(array);

    expect(array).toEqual([1, 3, 4, 4, 5, 7, 7, 8, 9, 9, 23, 67, 324, 6345]);
  });
  test("odd array", () => {
    const array = [4, 1, 2, 51, 6];
    mergeSort(array);
    expect(array).toEqual([1, 2, 4, 6, 51]);
  });
  test("empty array", () => {
    const array = [];
    mergeSort(array);
    expect(array).toEqual([]);
  });
  test("array length one", () => {
    const array = [15];
    mergeSort(array);
    expect(array).toEqual([15]);
  });
  test("array length two", () => {
    const array = [15, 8];
    mergeSort(array);
    expect(array).toEqual([8, 15]);
  });
  test("pass null", () => {
    const array = null;
    mergeSort(array);
    expect(array).toEqual(null);
  });
  test("pass undefined", () => {
    const array = undefined;
    mergeSort(array);
    expect(array).toEqual(undefined);
  });
  test("pass object", () => {
    const array = {};
    mergeSort(array);
    expect(array).toEqual({});
  });
  test("pass NaN", () => {
    const array = NaN;
    mergeSort(array);
    expect(array).toEqual(NaN);
  });
  test("pass number", () => {
    const array = 10;
    mergeSort(array);
    expect(array).toEqual(10);
  });
});
