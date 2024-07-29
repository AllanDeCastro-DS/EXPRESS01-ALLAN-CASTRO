const ex = require('express')
const server = ex()

server.get('/', (req, res) => {
    //3 respondendo a uma requisição
    res.send('<h1>Olá ExpressJS</h1>')
})

server.get('/sobre', (req, res) => {
    res.send('<h2>Somos quem podemos ser</h2>')
})


server.get('/json', (req, res) => {
    res.send({ 'nome': 'Alcebíades' })
})

server.use((req,res)=>{
    //res.send('Erro!!!');
    //para mostrar o status code correto
    res.status(404).send("<h1>Erro!!</h1>");
})
server.listen(3000);