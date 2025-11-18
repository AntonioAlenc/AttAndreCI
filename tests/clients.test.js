import request from "supertest";
import app from "../src/app.js";

describe("CRUD Clients", () => {
  
  it("should create a client", async () => {
    const res = await request(app)
      .post("/clients")
      .send({ name: "Antonio" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Antonio");
  });

  it("should list clients", async () => {
    const res = await request(app).get("/clients");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
