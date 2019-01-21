  $(document).ready(function() {
        $('.showprocess').click(function() {
                $('.toggle').slideToggle("slow");
        });

        $("#fold").click(function () {
        $(".fold_p").fadeOut(function () {
            $(".fold_p").text(($(".fold_p").text() == '+ Show design process') ? '- Hide design process' : '+ Show design process').fadeIn();
            })
         })
    });


$('.gallery').flickity({
  // options
    imagesLoaded: true,
  cellAlign: 'left',
  contain: true
});

$('.gallery2').flickity({
  // options
    imagesLoaded: true,
  cellAlign: 'left',
  contain: true
});



