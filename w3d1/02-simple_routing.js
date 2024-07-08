// HTTP Server w/ Routing

const http = require("http");

const user1 = {
  name: "Pequeno Pollo de la Pampa",
  email: "pock@pock.com",
  isAdmin: false,
};

const user2 = {
  name: "Arsène Lupin",
  email: "gentleman@cambrioleur.com",
  isAdmin: true,
};

const users = {
  "1": user1,
  "2": user2,
};

// GET / POST / PUT / DELETE / PATCH ???

const server = http.createServer((request, response) => {

  console.log(request.url)

  const pathList = request.url.split("/")

  if(pathList[1] === "users"){
    response.writeHead(200, { 'Content-Type': 'application/json' })

    const secondParam = Number(pathList[2])
    const secondParamValid = !Number.isNaN(secondParam) && secondParam !== ""

    if(secondParamValid){
      return response.end(JSON.stringify(users[secondParam]))
    }

    return response.end(JSON.stringify(users))
  }

  response.writeHead(200, { 'Content-Type': 'text/html' })  
  return response.end("Hello!")
})

server.listen(3000)