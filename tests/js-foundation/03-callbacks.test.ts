import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks.ts", () => {
  test("getUserById should failed with error message when user not found", () => {
    const userId = 10;
    getUserById(userId, (error, user) => {
      expect(error).toBe(`User not found with id ${userId}`);
      expect(user).toBeUndefined();
    });
  });

  test("getUserById should return user when found", () => {
    const userId = 1;

    getUserById(userId, (error, user) => {
      expect(error).toBeUndefined();
      expect(user).toEqual({ id: 1, name: "John Doe" });
    });
  });
});
