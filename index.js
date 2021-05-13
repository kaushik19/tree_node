const express = require('express');
const app = express();
const {urlencoded, json} = require('body-parser');

// View Page
app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/', require('./routes/router'));

app.use(express.static(__dirname + '/public'));

app.listen(5000, function(){
  console.log('Express app listening on port 5000');
})

module.exports = app;
