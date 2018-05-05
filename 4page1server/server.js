const http = require('http');
const fs = require('fs');

const port = 7000;

const server = http.createServer(handleRequest);


function handleRequest (req, res) {
    let path = req.url;

    switch(path){

        case "/foods":
        return fs.readFile(__dirname + '/foods.html', (err, data)=>{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(data);
        })
        
        case "/movies":
        return fs.readFile(__dirname + '/movies.html', (err, data)=>{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(data);
        })
        case "/frames":
        return fs.readFile(__dirname + '/frames.html', (err, data)=>{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(data);
        })
        default:
        return fs.readFile(__dirname + '/home.html', (err, data)=>{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(data);
        })
    }
    
}



server.listen(port, () => {
    console.log(`LISTENING AT ${port}`);    
})

