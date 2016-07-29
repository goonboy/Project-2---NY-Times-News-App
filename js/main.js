$(document).ready(function() {

  $('#dropdown-menu-options').on('change',function(event) {
    event.preventDefault();
    //Setting options value in variable
    var selection = $('#dropdown-menu-options').val();
    console.log(selection);
    var url = "https://api.nytimes.com/svc/topstories/v2/" + selection + ".json";
    		url += '?' + $.param({'api-key': "     "//Enter your new york times api key between the quotations
  			});


		//Ajax request
		  $.ajax ({
		    url: url,
		    method: 'GET',
		    dataType: 'json'
  		})

			//Ajax finishes request and pulls object "results"  
  		.done(function(result) {
			  console.log(result);
			  

			  //enter loop and if statement to retrieve the information you want to display
			  //inside the if statement concantinate your html elements and object/array results

			 }).fail(function(err) {
			  //if no information shows concantinate message to tell user there is no information  
			    throw err;
			  });


  });
});

/*-------- Old Code----------
  //Variables for Ajax request
  var selection = $('#dropdown-menu-options').val();
  console.log(selection);

  var url = "https://api.nytimes.com/svc/topstories/v2/" + selection + ".json";
  url += '?' + $.param({
  'api-key': "=5f1e5040697847d88a61f83ed130ec5a"
  });

  //Ajax request
  $.ajax ({
    url: url,
    method: 'GET',
    dataType: 'json'
  })

.done(function(result) {
  console.log(result);
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
  .fail(function(err) {
    throw err;
  })
});

-----*/
  

