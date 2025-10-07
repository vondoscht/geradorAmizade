const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// >>> SERVE a pasta public (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Rotas utilitárias (opcional)
app.get("/health", (req, res) => res.send("ok"));
app.post("/form", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);
  res.json({ success: true });
});

// Porta/host pro Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Servidor ouvindo em http://localhost:${PORT}`)
);
