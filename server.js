const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("App funcionando correctamente");
});

app.post("/webhook", (req, res) => {
    console.log("Webhook recibido:", req.body);
    res.status(200).json({ message: "Evento recibido" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

