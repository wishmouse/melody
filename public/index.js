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
        var linkOne = query.items[0].external_urls.spotify
        var imageSmallOne = query.items[0].album.images[1].url
        var songNameOne = query.items[0].name
        console.log("songNameOne :", songNameOne)
        var previewOne = query.items[0].preview_url

        var linkTwo = query.items[1].external_urls.spotify
        var imageSmallTwo = query.items[1].album.images[1].url
        var songNameTwo = query.items[1].name
        console.log("songNameTwo : ", songNameTwo)
        var previewTwo = query.items[1].preview_url

        var linkThree = query.items[2].external_urls.spotify
        var imageSmallThree = query.items[2].album.images[1].url
        var songNameThree = query.items[2].name
        console.log("songNameThree", songNameThree)
        var previewThree = query.items[2].preview_url

        document.getElementById("songNameOne").innerHTML = songNameOne
        document.getElementById("linkOne").innerHTML = linkOne
        $("body").append("<img src="+ imageSmallOne + " style='width:200;height:200'>")
        $("body").append("<source src="+ previewOne + ">")

        document.getElementById("songNameTwo").innerHTML = songNameTwo
        document.getElementById("linkTwo").innerHTML = linkTwo
        $("body").append("<img src="+ imageSmallTwo + " style='width:200;height:200'>")
        $("body").append("<source src="+ previewTwo + ">")

        document.getElementById("songNameThree").innerHTML = songNameThree
        document.getElementById("linkThree").innerHTML = linkThree
        $("body").append("<img src="+ imageSmallThree + " style='width:200;height:200'>")
        $("body").append("<source src="+ previewThree + ">")
        // document.getElementById("preview").innerHTML = preview
      })
  })
})
// end of document ready function
