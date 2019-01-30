//Toggle Nav Button
$(function() {
    $(".nav-button").click(function() {
        $(".navbar").slideToggle("slow");
    });

});

// ISOTOP //


$('.project-boxes').isotope({
    itemSelector: '.box',
    layoutMode: 'fitRows'
});

$('.buttons ul li').click(function() {
    $('.buttons ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.project-boxes').isotope({
        filter: selector
    });
    return false;
});





// dropdown
$(function() {
    $(".dropdown").click(function(e) {
        $(".dropdown-menu").hide();
        $(this).find(".dropdown-menu:first").toggle();

        e.preventDefault(); // Stop navigation
    });
});

$(document).click(function(e) {
    var container = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".dropdown-menu").hide();
    }
});





// slider 
$(".slides > div:gt(0)").hide();
setInterval(function() {
    $('.slides > div:first')
        .fadeOut(500).next()
        .fadeIn(500)
        .end()
        .appendTo('.slides');
}, 5000);




// CountUp ////

$(function() {
    $('.counter').counterUp({
        delay: 50,
        time: 3000
    });

});

// Back to Top
$(function() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#toTop').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});



// Team slider//
// (function($) {
//     $(document).ready(function() {
//         $('.carousel').slick({
//             // options
//             dota: true,
//             arrows: false,
//             autoplay: true,
//             autoplaySpeed: 3000
//         });

//     });

// })(jQuery)


// dropdown