$(document).ready(function () {

    // Načtení dat z url
    function getJsonFromUrl(e) {
        e || (e = location.href);
        var t = e.indexOf("?"),
            n = e.indexOf("#");
        if (-1 == n && -1 == t) return {}; - 1 == n && (n = e.length);
        var o = -1 == t || n == t + 1 ? e.substring(n) : e.substring(t + 1, n),
            d = {};
        return o.split("&").forEach(function (e) {
            if (e) {
                var t = (e = e.split("+").join(" ")).indexOf("="),
                    n = -1 < t ? e.substr(0, t) : e,
                    o = -1 < t ? decodeURIComponent(e.substr(t + 1)) : "",
                    l = n.indexOf("[");
                if (-1 == l) d[decodeURIComponent(n)] = o;
                else {
                    var s = n.indexOf("]", l),
                        r = decodeURIComponent(n.substring(l + 1, s));
                    n = decodeURIComponent(n.substring(0, l)), d[n] || (d[n] = []), r ? d[n][r] = o : d[n].push(o)
                }
            }
        }), d
    }
    

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
        $('.img-logo').remove();

        $('.nav-link').each(function(){
            var originalHref = $(this).attr('href');
            $(this).attr('href', originalHref + '?theme=dark');
        });
    }

    $('.scrollbar-inner').scrollbar();
});    