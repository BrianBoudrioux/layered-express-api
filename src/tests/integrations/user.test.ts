import request from "supertest";
import database from '../../config/database';
import App from '../../config/server';
import routes from '../../modules';
import middlewares from '../../config/middlewares';

let server = new App(routes, middlewares);

beforeAll(async () => {
    await database.connect();
});

afterAll(async () => {
    await database.close();
});


describe("POST /users", () => {

    it("Should return a 201 http status code and return the spécified data", async () => {
        const res = await request(server.app).post('/users')
        .send({ email: "a@sa.fr", password: 'aa' })
        .expect(201);

        expect(res.body.email).toBe('a@sa.fr');
    });

});

describe("POST /users/login", () => {

    it("Should return a 200 http status code", async () => {
        const res = await request(server.app).post('/users/login')
        .send({ email: "a@sa.fr", password: 'aa' })
        .expect(200);
    });


});