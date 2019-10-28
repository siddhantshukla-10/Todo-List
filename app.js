var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

var todoRoutes = require('./routes/todos');

app.get('/',function(req,res){
  res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);  // /api/todos is the prefix of every route

app.listen((process.env.PORT || 3000),function(){
  console.log("APP is running!!");
});
