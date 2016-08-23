var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');  
var bodyParser = require('body-parser');

//var env = process.env.NODE_ENV = process.process.env.NODE_ENV || 'development';

var app = express();

app.set('views', './server/views');
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(stylus.middleware(
    {
        src: "./public",
        compile: compile
    }
));
app.use(express.static("./public"));
function compile(str, path){
    return stylus(str).set('filename', path);
};

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/'+req.params.partialPath);
})

// all routes by *
app.get('*', function(req,res){
   res.render('index'); 
});

var port = 3030;
app.listen(port);
console.log("Listening on port "+port+"...");