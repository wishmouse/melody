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
        var imageSmall = query.images[1].url
        var imageLarge = query.images[0].url
        var songName = query.name
        console.log("imageSmall", imageSmall)
        document.getElementById("songName").innerHTML = songName
        document.getElementById("link").innerHTML = link
        $("body").append("<img src="+ imageSmall + ">")

      })
  })
})
// end of document ready function
