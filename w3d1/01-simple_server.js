// Net package vs HTTP package

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
  "pock@pock.com": user1,
  "gentleman@cambrioleur.com": user2,
};


// 200 => OK
// 300 => Redirect
// 400 => Client fudged up (404 not found, 403 forbidden, 401 unauthorized, 418)
// 500 => Server fudged up

const server = http.createServer((request, response) => {
  response.writeHead(418, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(users))
})

server.listen(3000)