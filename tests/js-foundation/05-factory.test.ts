import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
  const getUUID = () => "1234";
  const getAge = () => 35;

  test("Build make person return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(makePerson).toBeInstanceOf(Function);
  });

  test("build make person return a person object", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const obj = { name: "John", birthdate: "1985-10-21" };
    const person = makePerson(obj);

    expect(person).toEqual({
      id: "1234",
      name: "John",
      birthdate: "1985-10-21",
      age: 35,
    });
  });
});
