const http = require('http');
const path = require('path');
const fs = require('fs');

const serverPort = 8080;

const handleClientRequest = (request, response) => {
    request.url
}

const server = http.createServer(handleClientRequest);
server.listen(serverPort)