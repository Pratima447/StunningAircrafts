// slick sliders
$(document).ready(function () {
    load_images_now();
})

$('#home_banner').slick({
    slidesToShow: 1,
    infinite: true,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    arrows: true,
    autoplay: true,
    speed: 1000,
    lazyLoad: 'progressive',
})


$('#home_banner .slick-next').html('');
$('#home_banner .slick-prev').html('');

function load_images_now() {
    let timeout = setTimeout(function() {
        $.each($('img'), function() {
            if ( $(this).attr('data-src') && $(this).offset().top < ($(window).scrollTop() + $(window).height() + 100) ) {
                var source = $(this).data('src');
                $(this).attr('src', source);
                $(this).removeAttr('data-src');
            }
        })
    }, 500);
}

$(window).scroll(function () {
    //lazy load of images
    load_images_now();
})