$(document).ready(function () {
    var viewHeight = $(window).height() + 'px';
    console.log("height " + viewHeight);
    $("#parallax").height(viewHeight);
    $("#Wrapper").height(viewHeight);
    console.log("Width " + $(window).width());
    if ($(window).width() > 850) {
        $(window).on("scroll", function () {
            var fromTop = $(window).scrollTop();
            if (fromTop > 575) {
                $("header").slideDown(1000).removeClass("hidden");
            } else if (fromTop < 575) {
                $("header").addClass("hidden").slideUp(1000);
            };
        });
    } else {};

    // $('#formSubmit').click(function () {
    //     $('#contact').attr('action',
    //         'mailto:boetw@me.com?subject=' +
    //         $('#formSubject').val() + '&body=' + $('#formText').val() + 'from' +
    //         $('formName') + $('#formEmail'));
    //     $('#contact').submit();
    //     $("#contactForm").faceOut();
    // });
});
// $(function () {

//     // contact form animations
//     $('.contact').click(function () {
//         $('#contactForm').fadeToggle();
//     })
//     $(document).mouseup(function (e) {
//         var container = $("#contactForm");

//         if (!container.is(e.target) // if the target of the click isn't the container...
//             && container.has(e.target).length === 0) // ... nor a descendant of the container
//         {
//             container.fadeOut();
//         }
//     });

// });
