//get val() from form
//store as var
//append to page

// let name = $('#name').val();
// console.log(name);

const http = require('http');
const bodyParser = require('body-parser');

const port = 7000;

const server = http.createServer(handleReq)

function handleReq (req, res) {
    
    res.use(bodyParser.urlencoded({extended: true}));


}

server.listen(port, () =>{
    console.log(`LISTENING AT ${port}`);
});