const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

/**
 * Banco de Dados em memória para POC
 * Para implementação futura seria escolhido um MySQL
 * Com a tabelas fornecedor, pecas e pecas_fornecedor
 */
const fornecedores = require('./fornecedores');

app.get('/', async (req, res) => {
	const authHeader = req.headers['authorization'];
	if (!authHeader) {
		return res.status(401).json({ message: 'Authorization header missing' });
	}

	try {
		const response = await axios.get('http://localhost:3001/auth', {
			headers: {
				'Authorization': authHeader
			}
		});
		if (response.status != 200) {
			return res.status(401).json({ message: 'Unauthorized' });
		}
		return res.json(fornecedores);
	} catch (error) {
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
        const fornecedor = fornecedores.find(n => n.id == id);
        if (!fornecedor) {
            return res.status(404).json({ message: 'Fornecedor not found' });
        }
        return res.json(fornecedor);
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.listen(3003, () => console.log('CYCLE - FORNECEDORES RUNNING ON 3003 PORT!'))