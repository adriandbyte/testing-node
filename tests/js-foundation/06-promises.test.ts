import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("js-foundation/06-promises.ts", () => {
  test("getPokemonId return a pokemon", async () => {
    const pokemonName = await getPokemonById(1);

    expect(pokemonName).toBe("bulbasaur");
  });

  test("getPokemonId return a error", async () => {
    const id = 100000000000;
    try {
      await getPokemonById(id);
    } catch (error) {
      expect(error).toBe(`Pokemon not found with the id: ${id}`);
    }
  });
});
