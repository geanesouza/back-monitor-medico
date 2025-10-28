const express = require("express");
const app = express();
const conn = require("./db/conn");

// para tornar o servidor acessível em qualquer lugar
const cors = require("cors");
app.use(cors());

// para usar .env
require("dotenv/config");

const api = process.env.API_URL;

const bodyParser = require("body-parser");

const morgan = require("morgan");

// middleware para receber e enviar as json
app.use(bodyParser.json());
app.use(morgan("tiny"));

const medicalDataRoutes = require("./routes/medicalDataRoutes");

app.use(`${api}/data`, medicalDataRoutes);

app.listen(5000, () => {
    console.log("server is running 5000");
});