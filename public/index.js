var $ = require('jquery')
var request = require('superagent')
var search = require('../views/main.hbs')
var songs = require('../views/songs.hbs')

$(document).ready(function(){

  $('#search').click(function(e){
      e.preventDefault()
          var track = $('#search-form input[name=song]').val().replace(/ /g,"%20")
      request
      .post('/')
      .send({search: track})
      .end(function(err, response){
        //if statement for error/ response
        var query = JSON.parse(response.text)
        var link = query.external_urls.spotify
        var imageSmall = query.album.images[1].url
        var imageLarge = query.album.images[0].url
        var songName = query.name
        var preview = query.preview_url
        document.getElementById("songName").innerHTML = songName
        document.getElementById("link").innerHTML = link
        $("body").append("<img src="+ imageSmall + ">")
        $("body").append("<source src="+ preview + ">")
        // document.getElementById("preview").innerHTML = preview
      })
  })
})
// end of document ready function
