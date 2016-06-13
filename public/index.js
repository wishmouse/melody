var $ = require('jquery')
var superagent = require('superagent')
var search = require('../views/main.hbs')
// var send = require('./views/send.hbs')


$(document).ready(function(){

  $('#search').click(function(e){
      e.preventDefault()
          var searchForSong = $('#search-form input[name=song]').val()
          console.log("searchForSong :", searchForSong)
      request
      .post('/songs')
      .send(searchForSong)
      .end(function(err, res){
        console.log("res.body: ", res.body)
      })
  })
})
// end of document ready function
