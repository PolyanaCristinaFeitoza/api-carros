const express = require("express");
const router = express.Router();

const CarroController = require("./controllers/CarroController");

//criando o endpoint e passando a rota
router.get("/carros", CarroController.buscarTodos);

//criando o endpoint e pegando apenas um carro por id
router.get("/carro/:codigo", CarroController.buscarUm)

//add carros ao meu banco
router.post("/carro", CarroController.inserir);

//rota de alteração
router.put("/carro/:codigo", CarroController.alterar);

//excluir
router.delete("/carro/:codigo", CarroController.excluir);

module.exports = router;