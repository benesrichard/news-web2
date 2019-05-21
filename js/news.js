$(document).ready(function () {


    $("h2").each(function (index) {
        // Přidám id ke každému h2
        var headingId = "feature-heading-" + index;
        $(this).attr("id", headingId);

        // Vytvořím seznam h2 s odkazy                
        $("#features-list").append("<li><a class='js-scroll-trigger' href='#" + headingId + "'>" + $(this).text() +
            "</a></li>");

    });
});


(function($) {
    "use strict"; // Start of use strict
  //#features-list"
  $( '#features-list' ).on( 'click', 'a', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }

  });


  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#sideNav'
    });
  
  })(jQuery); 