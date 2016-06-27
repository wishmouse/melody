var $ = require('jquery')
var request = require('superagent')
var search = require('../views/main.hbs')
var songs = require('../views/songs.hbs')

$(document).ready(function(){

  $('#search').click(function(e){
      e.preventDefault()
          var track = $('#search-form input[name=song]').val().replace(/ /g,"%20")
          console.log("track :",track)
      request
      .post('/')
      .send({search: track})
      .end(function(err, response){
        //if statement for error/ response
        var query = JSON.parse(response.text)
        var link = query.external_urls.spotify
        var imageSmall = query.images[2]
        var imageLarge = query.images[0]
        var songName = query.name
        console.log("this is query: ", query)
        console.log("name :", songName)
        console.log("link :", link)
        $('body').append("<p>" + songName +"</p>")
        //jquery or js  append to the page
      })
  })
})
// end of document ready function
