
//////////////////
const express = require('express')
const clienteController = require('../Controller/cliente')
const contaController = require('../Controller/conta')
const routes = express.Router()

routes.post('/clientes', clienteController.clientesCadastrado)
routes.get('/contas-clientes', clienteController.detalhesDoCliente)
routes.get('/contas-clientes/:id', clienteController.detalhesDoClientePorId)
routes.delete("/contas-clientes/:id", clienteController.deletarConta)
routes.patch('/contas-clientes/:id', clienteController.atualizarConta)

module.exports = routes