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