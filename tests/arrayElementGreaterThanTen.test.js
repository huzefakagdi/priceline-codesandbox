import arrayElementGreaterThanTen from "../src/arrayElementGreaterThanTen";

test("Check if Any element of the array is greater than 10", () => {
  const inputArray = [1, 5, 8, 11, 6];
  expect(arrayElementGreaterThanTen(inputArray)).toBe(true);
});
