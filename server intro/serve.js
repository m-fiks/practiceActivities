// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//  * Generate the good/bad phrase randomly from a list of predefined phrases
//  * Use the `twitter` package inside the response to also return a random tweet
const port1 = 7000;
const port2 = 7500;

const http = require('http');

function handleRequest(req,res){
    res.end('you are beautiful');
}

function secondhandle (req,res){
    res.end('you suck');
}

const server1 = http.createServer(handleRequest);

server1.listen(port1, () =>{
    console.log('listening on http://localhost:' + port1);
})

const server2 = http.createServer(secondhandle);

server2.listen(port2, () =>{
    console.log('listening on http://localhost:' + port2);
})