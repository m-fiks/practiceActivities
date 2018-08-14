const http = require('http');

const port = 7000;

const html = "<html>" +
"<body><h1>HELLO</h1><p>doo dah</p></body></html>"
const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.write(html);
    res.end();
})

server.listen(port, () =>{
    console.log(`server started on: ${port}`)
})