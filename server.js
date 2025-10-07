import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("🚀 API do Carrd funcionando!");
});

app.get("/health", (req, res) => {
  res.send("ok");
});

app.post("/form", (req, res) => {
  console.log("📩 Dados recebidos:", req.body);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
