/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

 $(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('.navbar').addClass('stickyHeaders');
    }
    else {
        $('.navbar').removeClass('stickyHeaders');
    }
});



$(document).ready(function () {

    $(".test-popup-link").magnificPopup({
        type: "iframe",
        // other options
    });

    // heroCarousel
    $(function () {
        if ($('.heroCarousel').length) {
            $(".heroCarousel").owlCarousel({
                items: 1,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000,
                animateOut: 'fadeOut',
                smartSpeed: 2000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
    });

    // featured-slider
    $(function () {
        if ($('.featured-slider').length) {
            $(".featured-slider").owlCarousel({
                items: 3,
                margin: 30,
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: 'fadeOut',
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    767: {
                        items: 3
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }
    });


    //Trip Plans/Itineraries
    $(function () {
        if ($(".slider-wrapper").length) {
            $(".slider-wrapper").owlCarousel({
                items: 4,
                autoplayHoverPause: true,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                animateOut: "fadeOut",
                smartSpeed: 3000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    767: {
                        items: 2.2,
                        nav: false,
                        dots: true,
                    },
                    991: {
                        items: 3.2,
                        nav: false,
                        dots: true,
                    },
                    1200: {
                        items: 4,
                        nav: true,
                        dots: false,
                    },
                },
            });
        }
    });

    //Activities/Experiences
    $(function () {
        if ($(".experiences-wrapper").length) {
            $(".experiences-wrapper").owlCarousel({
                items: 5,
                autoplayHoverPause: true,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                animateOut: "fadeOut",
                smartSpeed: 3000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    },
                    767: {
                        items: 2.2,
                        nav: false,
                        dots: true,
                    },
                    991: {
                        items: 3.2,
                        nav: false,
                        dots: true,
                    },
                    1200: {
                        items: 5,
                        nav: true,
                        dots: false,
                    },
                },
            });
        }
    });
    // join slider
    $(function () {
        if ($(".joinSlider-wrapper").length) {
            $(".joinSlider-wrapper").owlCarousel({
                items: 3,
                autoplayHoverPause: true,
                margin: 22,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                animateOut: "fadeOut",
                smartSpeed: 3000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1.1,
                        nav: false,
                        dots: true,
                    },
                    767: {
                        items: 2.2,
                        nav: false,
                        dots: true,
                    },
                    991: {
                        items: 2.2,
                        nav: false,
                        dots: true,
                    },
                    1200: {
                        items: 3.2,
                        nav: true,
                        dots: false,
                    },
                },
            });
        }
    });


    var alterClass = function () {
        var joinWindowSize = document.body.clientWidth;
        if (joinWindowSize < 991) {
            $(".joinCommunity").addClass("container sectionPadding");
            $(".joinCommunity").removeClass("join-padding");
        } else if (joinWindowSize >= 992) {
            $(".joinCommunity").addClass("join-padding");
            $(".joinCommunity").removeClass("container");
        }
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();




    // datepicker init
    $(function () {
        if ($('.datepicker').length) {
            $('.datepicker').datepicker();
        }
    });


    // for select2
    $(function () {
        if ($(".select2-init").length) {
            $(".select2-init").select2({
                width: 'resolve' // need to override the changed default
            });
        }
    });




    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });

});
