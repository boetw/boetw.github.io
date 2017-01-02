$(document).ready(function () {
        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            if (fromTop > 575){
            $("header").removeClass("hidden");
            }
        });
})