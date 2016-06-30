var $ = require('jquery')
var request = require('superagent')
var search = require('../views/main.hbs')
// var songs = require('../views/songs.hbs')

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
        var linkOne = query.items[0].external_urls.spotify
        var imageSmallOne = query.items[0].album.images[1].url
        var songNameOne = query.items[0].name
        var previewOne = query.items[0].preview_url

        var linkTwo = query.items[1].external_urls.spotify
        var imageSmallTwo = query.items[1].album.images[1].url
        var songNameTwo = query.items[1].name
        var previewTwo = query.items[1].preview_url

        var linkThree = query.items[2].external_urls.spotify
        var imageSmallThree = query.items[2].album.images[1].url
        var songNameThree = query.items[2].name
        var previewThree = query.items[2].preview_url

        document.getElementById("songNameOne").innerHTML = songNameOne
        document.getElementById("linkOne").innerHTML = linkOne
        $("#resultsOne").append("<img src="+ imageSmallOne + " style='width:200;height:200'>")
        $("#previewOne").append("<audio controls><source src="+ previewOne + " type= 'audio/mpeg'></audio>")

        document.getElementById("songNameTwo").innerHTML = songNameTwo
        document.getElementById("linkTwo").innerHTML = linkTwo
        $("#resultsTwo").append("<img src="+ imageSmallTwo + " style='width:200;height:200'>")
        $("#previewTwo").append("<audio controls><source src="+ previewTwo + " type= 'audio/mpeg'></audio>")

        document.getElementById("songNameThree").innerHTML = songNameThree
        document.getElementById("linkThree").innerHTML = linkThree
        $("#resultsThree").append("<img src="+ imageSmallThree + " style='width:200;height:200'>")
        $("#previewThree").append("<audio controls><source src="+ previewThree + " type= 'audio/mpeg'></audio>")
        // document.getElementById("preview").innerHTML = preview
      })
  })
})
// end of document ready function
// $("#results").append("<div class='posters'><h3> " + movies[i].title + "</h3><br>" + "<img src='https://image.tmdb.org/t/p/w185/" + movies[i].poster_path +"'> <br></div>")
