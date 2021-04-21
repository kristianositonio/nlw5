import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Olá Cris"
  });
});

app.post("/user", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso"
  });
});

app.listen(4747, () => console.log("server is running on port 4747") );