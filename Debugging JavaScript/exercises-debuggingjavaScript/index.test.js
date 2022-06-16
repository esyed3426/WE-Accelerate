const supertest = require("supertest");
const app = require("./index");
const request = supertest(app);

describe("GET /api/v1/doctors", () => {
  it("should get a list of doctors", async (done) => {
    const response = await request.get("/api/v1/doctors");
    expect(response.type).toBe("application/json");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(10);
    done();
  });
});

describe("GET /api/v1/patients/:id", () => {
  it("should get a patient by id", async (done) => {
    const response = await request.get("/api/v1/patients/1/");
    expect(response.status).toBe(200);
    done();
  });
});
