var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')


app.get('/', function(req, res){
  res.render('main')
})

app.listen(3000, function(){
  console.log("singing a little ditty on .... 3000")
})
