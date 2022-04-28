const express = require ('express');
const app = express();

app.get("/usuario",function(req,res) {
var usuario = req.query["user"];
if (usuario) {
    res.send(usuario) 
}else
res.send('nenhum usuario passado')
})

app.listen(3000,function(erro) {
    if (erro) {
        console.log('erro')
    } else {
        console.log('servidor rodando')
    }
})