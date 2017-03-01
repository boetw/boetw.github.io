$(document).ready(function() {
    var viewHeight = $(window).height() + 'px';
    console.log(viewHeight);
    $("#parallax").height(viewHeight);
    $("#Wrapper").height(viewHeight);


    $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        if (fromTop > 575) {
            $("header").slideDown(1000).removeClass("hidden");
        } else if (fromTop < 575) {
            $("header").addClass("hidden").slideUp(1000);
        }
    });
})