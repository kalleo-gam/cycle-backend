const express = require('express');
const cors = require('cors');
const axios = require('axios');

/**
 * Banco de Dados em memória para POC
 * Para implementação futura seria escolhido um MySQL
 * Com a tabelas fornecedor, pecas e pecas_fornecedor
 */
const pecas = require('./pecas');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/:id', async (req, res) => {
    const authHeader = req.headers['authorization']; // Adicionando autenticação
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    try {
        const response = await axios.get('http://localhost:3001/auth', {
            headers: {
                'Authorization': authHeader
            }
        });

        if (response.status !== 200) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const idPeca = req.params.id;
        const peca = pecas.find(c => c.id == idPeca);
        const fornecedor = req.body;
        const newFornecedor = peca.fornecedores.filter(f => f.id == fornecedor.id)[0] == undefined;

        if (newFornecedor && fornecedor.id && fornecedor.nome && fornecedor.email && fornecedor.celular) {
            peca.fornecedores.push(fornecedor);
            return res.json({ error: false });
        }
        return res.status(400).json({ error: true });
    } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 401) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.get('/', async (req, res) => {
    const authHeader = req.headers['authorization']; // Adicionando autenticação
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    try {
        const response = await axios.get('http://localhost:3001/auth', {
            headers: {
                'Authorization': authHeader
            }
        });

        if (response.status !== 200) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
		return res.json(pecas);
    } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 401) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.get('/:id', async (req, res) => {
    const authHeader = req.headers['authorization']; // Adicionando autenticação
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    try {
        const response = await axios.get('http://localhost:3001/auth', {
            headers: {
                'Authorization': authHeader
            }
        });

        if (response.status !== 200) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const id = req.params.id;
        const peca = pecas.find(c => c.id == id);
        if (!peca) {
            return res.status(404).json({ message: 'Peça not found' });
        }
        return res.json(peca);
    } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 401) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.listen(3002, () => console.log('CYCLE - PECAS RUNNING ON 3002 PORT!'));
