
////////////////////
const clientesCadastrado = () => {}
const detalhesDoCliente = () => {}
const atualizarConta = (req, res) => {
    const contaPorId = req.params.id
    const saque = req.body
    const contaExistente = listaClientes.find((cliente) => cliente.id == contaPorId)
    const valor = saque
    const detalhesDaConta = contaExistente.conta
    if (contaExistente) {
        if (detalhesDaConta.saldo >= valor.saque) {
            detalhesDaConta.saldo = detalhesDaConta.saldo - valor.saque
            contaExistente.conta = detalhesDaConta
        } else {
            return res.status(404).json({
                message: "Sua conta não possui saldo suficiente, tente novamente com outro valor"
            })
        }
        const novaConta = {
            ...contaExistente,
            ...saque,
        }

        return res.status(200).json(novaConta)
    }
    return res.status(404).json({
        message: "Conta não existe, tente novamente"
    })
}
const deletarConta = ()=> {}

module.exports = {
    clientesCadastrado,
    detalhesDoCliente,
    atualizarConta,
    deletarConta
}