$(document).ready(function () {

    // Generování feature listu
    $("h2").each(function (index) {
        // Přidám id ke každému h2
        var headingId = "feature-heading-" + index;
        $(this).attr("id", headingId);

        // Vytvořím seznam h2 s odkazy                
        $("#features-list").append("<li><a class='js-scroll-trigger' href='#" + headingId + "'>" + $(this).text() +
            "</a></li>");

    });

    // Kliknutí na odkaz v feature listu
    $('#features-list').on('click', 'a', function () {
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
    $('#features-list').on('click','.js-scroll-trigger',function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });


    // Aktivace dark theme
    urlParams = getJsonFromUrl(location.search);
   
    if(urlParams.theme == "dark")
    {
        $('#dark-css').attr('rel', 'stylesheet');              
    }

    if (urlParams.theme == "light" || urlParams.theme == "dark")
    {
        $('.img-logo').remove();

        $('.nav-link').each(function(){
            var originalHref = $(this).attr('href');
            $(this).attr('href', originalHref + '?theme=' + urlParams.theme);
        });
    }

    $('.scrollbar-inner').scrollbar();

    $("#loading").css("display", "none");
    $("#main-content").css("display", "block");
});    