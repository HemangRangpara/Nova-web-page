$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".scrollbar-on").addClass("active");
    } else {
       $(".scrollbar-on").removeClass("active");
    }
});