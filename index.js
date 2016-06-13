var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
var hbs = require('handlebars')
var hbsfy = require('hbsfy')
var superagent = require('superagent')
var cookieParser = require('cookie-parser')


var client_id = 'CLIENT_ID'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', function(req, res){
  res.render('main')
})

app.post('/', function(req, res){
  res.render('main')
})


app.listen(3000, function(){
  console.log("singing a little ditty on .... 3000")
})
