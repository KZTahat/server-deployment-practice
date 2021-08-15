"use struct";

const supertest = require("supertest");
const server = require("../server");
const request = supertest(server.app);

describe("express server test", () => {
  it("should check the (All Good) works successfully", async () => {
    //arrange
    let param = "/";
    let status = 200;
    let text = "All Good :)";
    //act
    const response = await request.get(param);
    //assert
    expect(response.status).toBe(status);
    expect(response.text).toBe(text);
  });
  it("should check the data to be successful", async () => {
    //arrange
    let param = "/data";
    let status = 200;
    //act
    const response = await request.get("/data");
    //assert
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual("object");
  });
  it("should check 500 errors", async () => {
    //arrange
    let param = "/bad";
    let status = 500;
    //act
    const response = await request.get(param);
    //assert
    expect(response.status).toBe(status);
    expect(response.body.route).toBe(param);
  });
  it("should check 404 error", async () => {
    //arrange
    let param = "/anything";
    let status = 404;
    //act
    const response = await request.get(param);
    //assert
    expect(response.status).toBe(status);
  });
});
