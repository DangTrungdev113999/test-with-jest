const request = require("supertest");
const app = require("./../app.js");

describe("app_borrower", () => {
  test("/login", async () => {
    const response = await request(app).post("/test/app_borrower/login");
    expect(response.body.status).toBe("ok");
  });

  test("/borrowers/loans/fee", async () => {
    const response = await request(app).get(
      "/test/app_borrower/borrowers/loans/fee"
    );
    expect(response.body.status).toBe("ok");
    expect(response.body.description).toBe("Success");
  });
});
