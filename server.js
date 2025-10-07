const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// === Servir a pasta /public
const PUBLIC_DIR = path.join(__dirname, "public");
// desabilita cache agressivo p/ HTML (evita ver versão antiga)
app.use(express.static(PUBLIC_DIR, { maxAge: 0, etag: false }));

// saúde
app.get("/health", (req, res) => res.send("ok"));

// API exemplo (mantém se for usar)
app.post("/form", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);
  res.json({ success: true });
});

// ⚠️ NÃO tenha app.get("/")!
// Fallback: qualquer rota devolve o index.html do gerador
app.get("*", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.lis
