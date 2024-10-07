const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

/*
	Autenticação temporária da POC
	Para implementação real, será feito a consulta no banco de dados
	Onde a senha estará hasheada com a cifra SHA-256 + SALT aleatório
	Esse SALT aleatório é persistido no banco de dados, 
	Para pode ser recuperado e concatenado a senha do usuário ao logar
	É aplicado o hash com senha+salt e assim comparado com o hash do banco de dados
	Se iguais, será iniciado uma Session
*/
const sessions = [];
app.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username !== "lucas" || password !== "lucas") {
        return res.status(401).json({ error: "Credenciais inválidas" });
    }
    const token = createTokenSession();
    sessions.push({ token, authenticated: true });
    return res.json({ token }).send();
});

function createTokenSession() {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    const base64Header = Buffer.from(JSON.stringify(header)).toString('base64');
    const base64urlHeader = base64Header.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return base64urlHeader;
}

app.get('/auth', (req, res) => {
    const token = req.headers['authorization'];
    const cleanToken = token.replace("Bearer ", "");
    const session = sessions.find(session => session.token === cleanToken);
    if (session && session.authenticated) {
        return res.json({ authenticated: true });
    }
    return res.status(401).json({ authenticated: false });
})

app.listen(3001, () => console.log('CYCLE - AUTH RUNNING ON 3001 PORT!'));

module.exports = { app };
