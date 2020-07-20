$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(screen.height > 809)

        if(scroll> 5) {
            $("#mommyIsProud").addClass("animated swing duration-0.5s");
        }
        if(scroll > 15) {
            $("#frameworks-left-top").addClass("animated fadeInLeft delay-1.25s");
            $("#frameworks-middle-top").addClass("animated fadeInDown delay-1.25s");
            $("#frameworks-right-top").addClass("animated fadeInRight delay-1.25s");
        }
        if(scroll > 300) {
            $("#frameworks-left-bottom").addClass("animated fadeInLeft delay-1.25s");
            $("#frameworks-right-bottom").addClass("animated fadeInRight delay-1.25s");
        }
        if(scroll > 900) {
            $("#whyus-left").addClass("animated fadeInLeft delay-1.25s");
            $("#whyus-middle").addClass("animated fadeInUp delay-1.25s");
            $("#whyus-right").addClass("animated fadeInRight delay-1.25s");
        }
        if(scroll > 1600) {
            $("#reviews-top-left").addClass("animated tada delay-1.25s duration-0.25s");
            $("#reviews-top-right").addClass("animated tada delay-1.25s duration-0.25s");
        }
        if(scroll > 1800) {
            $("#reviews-bottom-left").addClass("animated tada delay-1.25s duration-0.25s");
            $("#reviews-bottom-right").addClass("animated tada delay-1.25s duration-0.25s");
        }
    })
})
//  Animation removal
//} else {
//    $("#frameworks-left-top").removeClass("animated fadeInLeft  delay-1.25s");
//    $("#frameworks-middle-top").removeClass("animated fadeInDown  delay-1.25s");
//    $("#frameworks-right-top").removeClass("animated fadeInRight  delay-1.25s");
//} 
//if(scroll > $('#frameworks-left-top').offset().top+425) {
//    $("#frameworks-left-top").removeClass("animated fadeInLeft  delay-1.25s");
//    $("#frameworks-middle-top").removeClass("animated fadeInDown  delay-1.25s");
//    $("#frameworks-right-top").removeClass("animated fadeInRight  delay-1.25s");
//}