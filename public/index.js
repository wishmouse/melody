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
      .end(function(err, res){
        console.log("error", err)
      })
  })
})
// end of document ready function
