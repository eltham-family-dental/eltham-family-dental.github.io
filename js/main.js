jQuery(document).ready(function($) {
    $(".header .navbar-toggler").on("click", function() {
        $(this).hasClass("collapsed") ? ($(this).find("small").text("CLOSE"),
            $(this).find(".open").addClass("d-none"),
            $(this).find(".close").removeClass("d-none")) : ($(this).find("small").text("MENU"),
            $(this).find(".open").removeClass("d-none"),
            $(this).find(".close").addClass("d-none"))
    })

    $('.fab').click (function(){
      $('.radial').toggleClass('open');
    });

});