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