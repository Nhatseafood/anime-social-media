var mongoose = require('mongoose');
var express = require('express');
var app = express();
var port = 3000;
app.listen(port, function(){
  console.log('hello world');
})

app.get('/', function(req, res){
    res.send('Hello Express');
});

app.use(express.static('public'));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://<uname>:<password>@ds139322.mlab.com:39322/aufinancex')
    .then(() => { // if all is ok we will be here
      console.log('Connected');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });
