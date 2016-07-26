$(document).ready(function() {

$('#dropdown-menu-options').val();

$(function(){
var selection = $('.choose').val();

var url = "https://api.nytimes.com/svc/topstories/v2/" + selection + ".json";
url += '?' + $.param({
'api-key': "=5f1e5040697847d88a61f83ed130ec5a"
});



$.ajax ({
  url: url,
  method: 'GET',
  dataType: 'json'
})

.done(function(result) {
  console.log(result);
})

.fail(function(err) {
  throw err;
})


  var nytData = data.results;


 if (nytData.length !== 0) {

    nytItems += '<ul>';

    $.each(nytData, function(key, value) {

      if (value.multimedia.length)  {

        articleImageUrl = value.multimedia[4].url;
        articleCaption = value.abstract;
        articleLink = value.url;

        nytItems += '<li>'
        nytItems += '<a href=="' + articleLink + '" target="_blank">'
        nytItems += '<div class="inner-tem-wrapper">';
        nytItems += '<div class="article" style="background-image:url('+articleImageUrl+')">';
        nytItems += '<div class="photo-meta">';
        nytItems += '</div>'
        nytItems += '</div>'
        nytItems += '</a>'
        nytItems += '<li>'
      }
    } 
  }
