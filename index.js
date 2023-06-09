//API CON EXPRESS
const express = require('express');
const app = express();

const BD_LOCAL = [
    {
        id: 1,
        resultado: 1
    }
]

app.set('PORT', 3000);
app.use(express.json());

app.get('/api', (req, res) => {
    res.send(
        {
            message: "API de suma"
        }
    )
})

app.post('/api/suma', (req, res) => {
    let number1 = parseInt(req.body.num1);
    let number2 = parseInt(req.body.num2);
    let result = number1 + number2;

    const resultado = {
        id: BD_LOCAL.length + 1,
        resultado: result
    }

    BD_LOCAL.push(resultado);
    res.send(resultado);
})

app.listen(app.get('PORT'), () => {
    console.log(`Servidor abierto en el puerto : ${ app.get('PORT') }`);
})