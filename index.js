const { Router } = require('express');
const express = require ('express');
const app = express();

const rota = require('./rotas');
app.use(rota.router);


app.set('view engine','ejs')
app.use(express.static('public'))
app.listen(3000,function(erro) {
    if (erro) {
        console.log('erro')
    } else {
        console.log('servidor rodando')
    }
})