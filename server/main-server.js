var express = require('express');
var path  = require('path');
var app = express();

var root  =  path.join(__dirname, '../dist/');
app.use(express.static(root));


app.listen(3000, ()=> console.log("app listening on port 3000"));