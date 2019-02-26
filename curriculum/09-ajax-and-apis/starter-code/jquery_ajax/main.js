/*
- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.
*/

'use strict';
$(function() {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "";


  $.ajax({
    type: 'GET',
    url : "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc",
    data :{ api_key : "e5dc0f217cb84bdccd69333ad48b2cf4"},
    contentType : "json",
    error : function(xhr, status, err){
        console.log(xhr)
        console.log(err)
        console.log(status)
    },
    success: function(res){

     res.results.forEach(e => {
         
         $(".sam").append(`<img class='img_poster' src='https://image.tmdb.org/t/p/w500/${e.poster_path}'/>`)
     });
         
    }
 })


});