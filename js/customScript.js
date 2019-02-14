$(document).ready(function () {
var $gallery = $('.gallery').flickity({
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true
});

var $gallery2 = $('.gallery2').flickity({
    // options
    imagesLoaded: true,
    cellAlign: 'left',
    contain: true
});





    $('.showprocess').click(function () {
        $('.toggle').slideToggle("slow");
        $gallery.flickity('resize');
        $gallery2.flickity('resize');
    });

    $("#fold").click(function () {
        $(".fold_p").fadeOut(function () {
            $(".fold_p").text(($(".fold_p").text() == '+ Show design process') ? '- Hide design process' : '+ Show design process').fadeIn();
        })
        

    })
    
});


window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 420) {
        document.getElementById("selfportrait").style.width = "80px";
        document.getElementById("squareanimate").style.width = "80px";
        document.getElementById("squareanimate").style.height = "80px";
    } else {
        document.getElementById("selfportrait").style.width = "120px";
        document.getElementById("squareanimate").style.width = "120px";
        document.getElementById("squareanimate").style.height = "120px";
    }
}
