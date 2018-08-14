const express = require('express');
const bodyParser = require('body-parser')
app = express();
const path = require('path');
const PORT = 3001;
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3001, () => console.log(`express server started at port 3001`));
//pug
// app.set('view engine', 'pug');
// app.set('views', './views');

// app.get('/first_template', (req,res)=>{
//     res.render('test');
// })

// app.get('/components', (req,res) =>{
//     res.render('content');
// })

//serving static files
// app.use(express.static('public'));



// const things = require('./things.js')
// app.use('/things', things);

// app.get('/:id', (req,res) => {
//     res.send(`The id you specified is ${req.params.id}`)
// })

