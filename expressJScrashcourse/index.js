const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//core mod
const path = require('path');

app = express();

//global vars
app.use((req, res, next) => {
    res.locals.errors = null;
    next();
})

//express validator middleware
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        const namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;

        while(namespace.length){
            formParam == '[' + namespace.shift() + ']'
        }
        return{
            param: formParam,
            msg: msg,
            value: value
        }
    }
}));

//custom middleware
// const logger = function(req,res,next){
//     console.log('Logging...');
//     next();
// }
// //placement/order of this is v important
// app.use(logger)

//express validator


//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//middleware for static folder for css, jquery, etc.
//set static path
app.use(express.static(path.join(__dirname, 'public')));

const users = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@gmail.com',
    },
    {
        id: 2,
        first_name: 'Sally',
        last_name: 'Rae',
        email: 'sally@gmail.com',
    },
    {
        id: 3,
        first_name: 'your',
        last_name: 'mom',
        email: 'momma@gmail.com',
    }
]
 
app.get('/', (req,res) =>{
    res.render('index',{
        title: 'Customers',
        users: users
    })
})

//catch form submission
app.post('/users/add', (req, res) =>{

    req.checkBody('first_name', 'First Name is Required').notEmpty();
    req.checkBody('last_name', 'Last Name is Required').notEmpty();
    req.checkBody('email', 'Email is Required').notEmpty();

    const errors = req.validationErrors();

    if(errors){
        res.render('index',{
            title: 'Customers',
            users: users,
            errors: errors
        })
    }
    else{
   //use this to access user submitted response
    //console.log(req.body.first_name)
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    console.log(newUser)
    console.log('SUCCESS')
    }
 
   
});

app.listen(3000, () =>{
    console.log(`server started on port 3000`)
})
