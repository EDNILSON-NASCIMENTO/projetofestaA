//modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//routes

//middlewares - travas do meio de projeto e acesso

//config
const dbName = "partytime";
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//atrelar as rotas ao express
app.get("/", (req, res) => {
  //primeira rota de teste
  res.json({ message: "Rota de teste será trocada!!!" });
});
//escutando a porta
app.listen(port, () => {
  console.log(`O backend está rodando na porta ${port}`);
});
