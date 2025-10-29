const express = require("express");
const app = express();
// para tornar o servidor acessível em qualquer lugar
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// para usar .env
require("dotenv").config();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Conexão com o banco
const conn = require("./db/conn");

// Rotas
const api = process.env.API_URL;
const medicalDataRoutes = require("./routes/medicalDataRoutes");
app.use(`${api}/data`, medicalDataRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Porta dinâmica ( Render )
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});