$(document).ready(function() {
    var viewHeight = $(window).height() + 'px';
    console.log("height "+viewHeight);
    $("#parallax").height(viewHeight);
    $("#Wrapper").height(viewHeight);
    console.log("Width "+$(window).width());
    if ($(window).width() > 850) {
        $(window).on("scroll", function() {
                var fromTop = $(window).scrollTop();
                if (fromTop > 575) {
                    $("header").slideDown(1000).removeClass("hidden");
                } else if (fromTop < 575) {
                    $("header").addClass("hidden").slideUp(1000);
                };
            });
        } else {};
});