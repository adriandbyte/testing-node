import { httpClientPlugin } from "../../src/plugins/http-client.plugin";
describe("plugins/http-client.plugin.ts", () => {
  test("GET method should return a response", async () => {
    const response = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    expect(response).toEqual({
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\n" +
        "suscipit recusandae consequuntur expedita et cum\n" +
        "reprehenderit molestiae ut ut quas totam\n" +
        "nostrum rerum est autem sunt rem eveniet architecto",
    });
  });

  test("POST,PUT and DELETE should return a function", async () => {
    expect(httpClientPlugin.post).toBeInstanceOf(Function);
    expect(httpClientPlugin.put).toBeInstanceOf(Function);
    expect(httpClientPlugin.delete).toBeInstanceOf(Function);
  });
});
