var $ = require('jquery')
var superagent = require('superagent')
var searchForm = require('./views/main.hbs')
// var send = require('./views/send.hbs')


$(document).ready(function(){

  $('#search').click(function(e){
      e.preventDefault()
          var search = $('#search-form input[name=song]').val()
    console.log('this is searchForm: ', search)
  })



}
