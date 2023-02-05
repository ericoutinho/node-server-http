const http = require("http");

http.createServer( (req, res) => {

    res.writeHead(200, {"Content-Type": "Application/json"})

    if (req.url === "/product") {
        res.end( JSON.stringify({message: "Você está em produtos"}) )
    }
    if (req.url === "/users") {
        res.end( JSON.stringify({message: "Você está em usuários"}))
    }

    res.end( JSON.stringify({message: "Sem rota definida"}))

}).listen(3000, () => { console.log("Server at 3000 port") })