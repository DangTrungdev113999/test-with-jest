const request = require("supertest");
const app = require("./../app.js");

describe("Op-avy.vn", () => {
  test("operators/login", async () => {
    const response = await request(app).post("/test/operators/login");
    expect(response.body.status).toBe("ok");
  });

  test("operators/me", async () => {
    const response = await request(app).get("/test/operators/me");
    expect(response.body.status).toBe("ok");
  });

  test("operators/me/files", async () => {
    const response = await request(app).post("/test/operators/me/files");
    expect(response.body.status).toBe("ok");
  });
});
