const http = require("http")
const app = require("./app")
const port = 3000


app.set("PORT", process.env.PORT_SERVER)
const server = http.createServer(app)

server.listen(port)
console.log(`Server listen on port`,port);

