import express from 'express';
import { accountsModel } from '../model/accountsModel.js';

const app = express();

// DEPÓSITO
app.patch('/accounts/:ag/:cc/deposito/:dep', async (req, res) => {
    try {
        const accounts = await accountsModel.findOneAndUpdate({
            agencia: req.params.ag,
            conta: req.params.cc
        }, {
            $inc: {
                balance: req.params.dep
            }
        });
        if (!accounts) {
            res.status(404).send("Agência, ou Conta não existente.");
        } else {
            res.status(200).send(`Depósito efetuado com sucesso no valor de: R$${req.params.dep},00 e o saldo atual da conta é de R$${accounts.balance},00`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// SAQUE
app.patch('/accounts/:ag/:cc/saque/:saq', async (req, res) => {
    try {
        const taxaSaque = 1;
        const accounts = await accountsModel.findOneAndUpdate({
            agencia: req.params.ag,
            conta: req.params.cc
        }, {
            $inc: {
                balance: - req.params.saq - taxaSaque
            }
        });
        if (!accounts) {
            res.status(404).send("Agência, ou Conta não existente.");
        } else {
            res.status(200).send(`Saque efetuado com sucesso no valor de: R$${req.params.saq},00. <br>Cobrança de taxa para saque no valor de R$${taxaSaque}. <br>O saldo atual de sua conta é de R$${accounts.balance},00`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// TRANSFERÊNCIA ENTRE CONTAS
app.patch('/accounts/transferencia/:ccorigem/:ccdestino/:valor', async (req, res) => {
    try {
        const contaOrigem = await accountsModel.findOneAndUpdate({
            conta: req.params.ccorigem
        }, {
            $inc: {
                balance: - req.params.valor
            }
        });

        const contaDestino = await accountsModel.findOneAndUpdate({
            conta: req.params.ccdestino
        }, {
            $inc: {
                balance: req.params.valor
            }
        })
        res.status(200).send({ contaOrigem, contaDestino })
    } catch (error) {
        res.status(500).send(error);
    }
})

// CONSULTA SALDO
app.get('/accounts/:ag/:cc/saldo', async (req, res) => {
    try {
        const accounts = await accountsModel.find({
            agencia: req.params.ag,
            conta: req.params.cc
        });
        if (!accounts) {
            res.status(404).send("Agência, ou Conta não existente.");
        } else {
            res.status(200).send(`Seu saldo atual é de R$${JSON.stringify(accounts[0].balance)},00`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// CONSULTA CLIENTE MENOR SALDO
app.get('/accounts/cliente/menorvalor/:menorValor', async (req, res) => {
    try {
        const accounts = await accountsModel.find({}, {
            _id: 0,
            agencia: 1,
            conta: 1,
            balance: 1
        }).sort({ balance: 1 }).limit(Number(req.params.menorValor))
        res.status(200).send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// CONSULTA CLIENTE MAIS RICO
app.get('/accounts/cliente/maiorvalor/:maiorValor', async (req, res) => {
    try {
        const accounts = await accountsModel.find({}, {
            _id: 0,
            agencia: 1,
            conta: 1,
            name: 1,
            balance: 1
        }).sort({ balance: -1 }).limit(Number(req.params.maiorValor))
        res.status(200).send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// TRANSFERÊNCIA CLIENTE MAIS RICO CONTA PRIVATE
app.patch('/accounts/private', async (req, res) => {
    try {
        let accounts = await accountsModel.aggregate([
            {
                $group: {
                    _id: "$agencia",
                    balance: { $max: "$balance" }
                }
            }
        ]);
        for (const account of accounts) {
            const { _id, balance } = account;
            let newAccounts = await accountsModel.findOne({
                agencia: _id,
                balance,
            });
            newAccounts.agencia = 99;
            newAccounts.save();
        }
        accounts = await accountsModel.find({
            agencia: 99
        });
        res.status(200).send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
})

// CALCULAR MÉDIA POR AGÊNCIA
app.get('/accounts/media/:ag', async (req, res) => {
    try {
        const accounts = await accountsModel.aggregate([
            {
                $match: { agencia: Number(req.params.ag) }
            },
            {
                $group: { _id: { agencia: "$agencia" }, media: { $avg: "$balance" } }
            }
        ]);

        if (!accounts) {
            res.status(404).send(`A agência informada ${req.params.ag} não existe em nossa base de dados.`);
        } else {
            res.status(200).send(accounts);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

// EXCLUIR CONTA
app.delete('/accounts/delete/:ag/:cc', async (req, res) => {
    try {
        const accounts = await accountsModel.findOneAndDelete({
            agencia: req.params.ag,
            conta: req.params.cc
        });
        if (!accounts) {
            res.status(404).send("Agência, ou Conta não existente.");
        } else {
            res.status(200).send(`A conta ${req.params.cc} foi excluída de nossa base de dados.`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// CONSULTAR TODAS AS CONTAS - APENAS PARA TESTAR O GET INICIAL
app.get('/accounts', async (req, res) => {
    try {
        const accounts = await accountsModel.find({});
        res.send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
})

export { app as accountsRouter };