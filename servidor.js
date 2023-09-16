

const http = require ("http");
const chalk = require("chalk")

const PORT = 8000
const host = "localhost";

const server= http.createServer((req, res)=>{

    res.writeHead(200, {'conten-type':'text/html'});
    res.end('<h1>Nicolas Pulido </h1><br><h3>El que madruga ,le da sueño a medio dia</h3>')



})

server.listen(PORT, ()=>{
    console.log(chalk.green(`Servidor en ${host}:${PORT} `))
})





