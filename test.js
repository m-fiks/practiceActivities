function greeting(x){
    console.log(x * 2);
}

greeting(4);

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
    if (err) throw err;
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type','text/html');
        res.write(html);
        res.end();
        });
    
    server.listen(port, hostname, () => {
        console.log('server started on port' + port);
    });
});





// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

