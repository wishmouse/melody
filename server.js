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

// var client_id = ; // Your client id
// var client_secret = ; // Your secret
// var redirect_uri = ; // Your redirect uri
//
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

  request
    .get('https://api.spotify.com/v1/search?q='+ searchTrack +'&type=track', function(req, res){
    var query = res.body.tracks.items[0]
    var link = query.album.external_urls.spotify
    var imageSmall = query.album.images[2]
    var imageLarge = query.album.images[0]
    var songName = query.name
  })
 res.json('songs')
})


app.listen(3000, function(){
  console.log("singing a little ditty on .... 3000")
})
