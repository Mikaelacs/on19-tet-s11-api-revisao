
  ///////////////////
  const clientesCadastrado = (req, res) => {
    const idAtualizado = uuidv4();
    const infData = new Date();

    const {
        nome_cliente,
        cpf_cliente,
        data_nascimento,
        conta: {
            numero,
            tipo
        }
    } = req.body

    const adicionarClientePorId = {
        id: idAtualizado,
        nome_cliente,
        cpf_cliente,
        data_nascimento,
        conta: {
            numero: numero,
            tipo: tipo,
            saldo: 0,
            data_criacao: infData
        }
    };

    listaDeClientes.push(adicionarClientePorId);
    return res.status(201).json(adicionarClientePorId);
}

const detalhesDoCliente = (req, res) => {
    const filtrarPorNome = req.query.nome.toLowerCase()
    const filtrarPorCpf = req.query.cpf

    const encontrarCliente = listaDeClientes.filter((item) => {

        if (filtrarPorNome) {
            return item.nome_cliente.toLowerCase() === filtrarPorNome.toLowerCase()
        }
        if (filtrarPorCpf) {
            return item.cpf_cliente === filtrarPorCpf
        }
        return item
    })
    res.json(encontrarCliente)
}

const detalhesDoClientePorId = (req, res) => {
    const id = req.params.id
    const clienteEncontrado = listaDeClientes.find((item, detalhesCliente) => cliente.id == id)
    if (clienteEncontrado) {
        return res.status(200).json(clienteEncontrado);
    }
    return res.status(404).json({ messagem: 'Cliente não encontrado, por favor, tentar novamente' });
}

const atualizarConta = (req, res) => {
    const contaPorId = req.params.id
    const novosCampos = req.body
    const conta = listaDeClientes.find(conta => conta.id == contaPorId)

    if (conta) {
        const contaAtualizada = {
            ...conta,
            ...novosCampos
        }

        return res.status(200).json(contaAtualizada)
    }
    return res.status(404).json({
        message: "A conta não foi encontrada, por favor, tentar novamente"
    })
}
const deletarConta = ()=> {
    const contaPorId = req.params.id
    const conta = listaDeClientes.find((conta) => conta.id == contaPorId)

    if (conta) {

        listaDeClientes.map((conta, index) => {
            if (conta.id == contaPorId) {
                return listaDeClientes.splice(index, 1)
            }
        })

        return res.status(200).json(listaDeClientes)
    }

    return res.status(404).json({
        message: "não encontrada"
    })
}

module.exports = {
    clientesCadastrado,
    detalhesDoCliente,
    detalhesDoClientePorId,
    atualizarConta,
    deletarConta
}