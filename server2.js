const express = require('express');
const server = express();



server.get('/',(req,res)=>{
    res.sendFile('./htmls/principal.html', {root:__dirname})
})

server.get('/servicos',(req,res)=>{
    res.sendFile('./htmls/servicos.html', {root:__dirname})
})

server.get('/Sobre',(req,res)=>{
    res.sendFile('./htmls/sobre.html', {root:__dirname})
})

server.use((req,res)=>{
    res.status(404).sendFile('./htmls/404.html', {root:__dirname})
})

server.listen(3000);