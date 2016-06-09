$(document).ready(function() {

    //carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        items       : 1,
        singleItem  : true,
        rewindNav   : false,
        dots        : true,
        autoplay    :true,
        autoplayTimeout:4000
    });

    //back to top
    $('#back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    //stick title
    function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var div_top = $('header').height();
        if (window_top > div_top) {
            $('.header-title h1').addClass('stick');
        } else {
            $('.header-title h1').removeClass('stick');
        }
    }
    $(function() {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });

    //share
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#email',
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#email';
                }
            }
        }
    });

});
