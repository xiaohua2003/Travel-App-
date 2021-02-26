import "babel-polyfill";
const request = require("supertest");
const app = require("../src/server/server");

describe("Test the path", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/")
            .then(res => {
                expect(res.statusCode).toEqual(200);
                done();
            });
    });
});
