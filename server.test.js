const request = require("supertest");
const app = require("./server"); // Asegúrate de que este camino sea correcto
let server; // Definir una variable para el servidor

describe("Pruebas de la aplicación", () => {
    beforeAll((done) => {
        server = app.listen(3001, () => { // Guardar la instancia del servidor
            console.log("Servidor de prueba corriendo en puerto 3001");
            done();
        });
    });

    afterAll((done) => {
        server.close(done); // Cerrar el servidor después de las pruebas
    });

    test("GET / debería responder con 'App funcionando correctamente'", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("App funcionando correctamente");
    });

    test("POST /webhook debería responder con mensaje de éxito", async () => {
        const response = await request(app).post("/webhook").send({ test: "data" });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Evento recibido");
    });
});

