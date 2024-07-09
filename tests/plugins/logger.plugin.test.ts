import {
  buildLogger,
  logger as winstonLogger,
} from "../../src/plugins/logger.plugin";

describe("/plugins/logger.plugin.ts", () => {
  const service = "app.js";
  test("buildLogger should return a function", () => {
    const logger = buildLogger("app.js");
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger should be called", () => {
    const winstonMock = jest.spyOn(winstonLogger, "log");
    const message = "test app.js";

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });

  test("logger should be called with error", () => {
    const winstonMock = jest.spyOn(winstonLogger, "error");
    const message = "error on app.js";

    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining({
        message,
        service,
      })
    );
  });
});
