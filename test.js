import {
  capitalize,
  reverseString,
  calculator,
  cypher,
  getTheAverage,
  getTheLength,
  getTheMaximum,
  getTheMinimum,
} from "./main";

test("capitalize function", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("adding", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtracting", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("divide", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("divide", () => {
  expect(() => {calculator.divide(10, 0)}).toThrowError("not allowed");
});

describe("cyphers a string", () => {
  test("cypher a letter", () => {
    expect(cypher("a", 3)).toBe("d");
  });
  test("cypher a word", () => {
    expect(cypher("abc", 3)).toBe("def");
  });
});

describe("analyze array", () => {
  test("average", () => {
    expect(getTheAverage([1, 2, 3, 4, 5])).toEqual(3);
  });
  test("min", () => {
    expect(getTheMinimum([1, 2, 3, 4, 5])).toEqual(1);
  });
  test("max", () => {
    expect(getTheMaximum([1, 2, 3, 4, 5])).toEqual(5);
  });
  test("length", () => {
    expect(getTheLength([1, 2, 3, 4, 5])).toEqual(5);
  });
});
