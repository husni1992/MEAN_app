var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');  
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


app.set('views', __dirname+'/server/views');
app.set('view engine', 'jade');

//logs all activities in console
//app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(stylus.middleware(
    {
        src: __dirname+"/public",
        compile: compile
    }
));
app.use(express.static(__dirname+"/public"));
function compile(str, path){
    return stylus(str).set('filename', path);
};

app.get('/partials/:partialPath', function(req, res){
    console.log('Requested: '+req.url);
    
    res.render('partials/'+req.params.partialPath, {
        testMSG: outputMongo
    });
})

if(env === 'development'){
    mongoose.connect('mongodb://localhost:27017/multivision');
}else{
    mongoose.connect('mongodb://husny:multivision@ds013966.mlab.com:13966/multivisionmean');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
   console.log('Multivision db opened'); 
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var outputMongo;
Message.findOne().exec(function(err, messageDoc){
    console.log('findOne() '+messageDoc.message);
    outputMongo = messageDoc.message; 
});

// all routes by *
app.get('*', function(req,res){
   res.render('index', {
       outputMongoMessage: outputMongo
   }); 
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log("Listening on port: "+port);