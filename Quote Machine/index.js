$(document).ready(function(){
  $('#newQuote').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#author').animate({
            opacity: 0
          }, 500,
          function() {
            $(this).animate({
              opacity: 1
            }, 500);
            $('#author').text(post.title);
          });
        $('.text').animate({
            opacity: 0
          }, 500,
          function() {
            $(this).animate({
              opacity: 1
            }, 500);
            $('.text').html(post.content);
          });
      },
      cache: false
    });
  });

})