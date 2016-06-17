var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
dotenv.load()
var hbs = require('handlebars')
var hbsfy = require('hbsfy')
var request = require('superagent')
var cookieParser = require('cookie-parser')
var env = process.env.NODE_ENV || 'development'
require('dotenv').config()

var passport = require('passport')

var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret
var redirect_uri = process.env.REDIRECT_URI; // Your redirect uri

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
  var searchTrack = req.body.search
    console.log("searchTrack :", searchTrack)

  request.get('https://api.spotify.com/v1/search?='+ searchTrack, function(req, res){
    console.log('res.body: ', res.body)
  })
})


app.listen(3000, function(){
  console.log("singing a little ditty on .... 3000")
})
