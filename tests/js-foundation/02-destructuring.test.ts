import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring.ts", () => {
  test("characters should have Flash and Batman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Batman");
  });

  test("characters should have Superman in the first position and Batman in last", () => {
    const first = characters[0];
    const last = characters[characters.length - 1];

    expect(first).toBe("Superman");
    expect(last).toBe("Batman");
  });
});
