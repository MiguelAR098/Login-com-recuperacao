const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

// servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "../public")));

// rota principal (index)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// rotas de autenticação
app.use("/auth", authRoutes);

// middleware de erro
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

module.exports = app;