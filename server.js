const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("App funcionando correctamente");
});

app.post("/webhook", (req, res) => {
    console.log("Webhook recibido:", req.body);
    res.status(200).json({ message: "Evento recibido" });
});

// Exportar la aplicación
module.exports = app;

