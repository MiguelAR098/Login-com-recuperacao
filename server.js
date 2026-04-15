import express from 'express'
//express é uma biblioteca completa, por isso criou a pasta node_modules
const app = express()

app.get('/usuarios', (req, res) => {
    res.send('OK, deu bom')
} )

// 1 - tipo de rota / metodo http
//2 - endereço (o html)

app.listen(3000)