const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1) servir /public
const PUBLIC_DIR = path.join(__dirname, "public");
app.use(express.static(PUBLIC_DIR));

// 2) saúde
app.get("/health", (req, res) => res.send("ok"));

// 3) API de exemplo (se quiser usar depois)
app.post("/form", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);
  res.json({ success: true });
});

// 🔴 IMPORTANTE: não tenha app.get("/") aqui!
// 4) fallback: qualquer rota cai no index.html do gerador
app.get("*", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Servidor ouvindo em http://localhost:${PORT}`)
);
