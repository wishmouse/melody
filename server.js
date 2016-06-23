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
var SpotifyWebApi = require('spotify-web-api-node')
var env = process.env.NODE_ENV || 'development'
require('dotenv').config()

var passport = require('passport')

var spotifyApi = new SpotifyWebApi({
  clientId : process.env.CLIENT_ID,
  clientSecret : process.env.CLIENT_SECRET,
  redirectUri : process.env.REDIRECT_URI
});

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
  res.render('main')
})

app.post('/', function(req, res){
  var searchTrack = req.body.search
    console.log("searchTrack :", searchTrack)
  request
    .get('https://api.spotify.com/v1/search?q='+ searchTrack +'&type=track')
    .then(function(data){
      var query = data.body.tracks.items[0].album
      var link = query.external_urls.spotify
      var imageSmall = query.images[2]
      var imageLarge = query.images[0]
      var songName = query.name
      console.log("this is query: ", query)
  res.render('songs', {data: link})
  })
})


app.listen(3000, function(){
  console.log("singing a little ditty on .... 3000")
})
