$(document).ready(function() {
  //sets default quote and default author
  $("#quote").text("Why not go out on a limb? Isn't that where the fruit is?");
  $("#quoteAuthor").text("- Mark Twain -");    
  
  //begins on click function to AJAX random quotes
  $("#getquote").on("click", function() {
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // API URL. Retrieved from developer's API page
        type: 'GET', // HTTP Methods, use GET, POST, PUT, DELETE, etc...
        data: {}, // Additional data parameters here
        dataType: 'json',
        success: function(data) {
            var displayQuote = data.quote;
            var displayAuthor = data.author;
            $("#quote").text(displayQuote);         //input random quote to #quote 
            $("#quoteAuthor").text("- " +  displayAuthor + " -");  //input random quote to #quoteAuthor
          
            $('#sendTweet').on('click', function(){
              window.open("https://twitter.com/intent/tweet?hashtags=randomquotes&text=" + displayQuote);
            }); //ends send tweet FN           
          
        },
        quote: function(data){alert (data.quote)},
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        // Enter here your Mashape key token to authenticate
        xhr.setRequestHeader("X-Mashape-Authorization", "LXEfSXhAu0mshqXzpOATVndoTsmpp1KnUkHjsnc9oTcFcEAo87"); 
        },      
    })
  }); //ends click function to AJAX random quotes
  
});//ends document ready function