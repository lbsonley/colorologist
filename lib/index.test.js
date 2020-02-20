import * as Colors from "./index";

test("hexToRgb returns array", () => {
  expect(Colors.hexToRgb("#aabbcc")).toBeInstanceOf(Array);
});
