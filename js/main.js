// Main JavaScript File
jQuery(document).ready(function($) {
    // Preloader
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow');
    });

    // Mobile menu toggle
    $('.mobile-toggle').on('click', function() {
        $('.menu-main-menu-container ul').slideToggle();
    });

    // Scroll to top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').addClass('show');
        } else {
            $('.scrollToTop').removeClass('show');
        }
    });

    $('.scrollToTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // Search box toggle
    $('.search-button').on('click', function(e) {
        e.preventDefault();
        $('.search-box input').toggleClass('active');
    });

    $('.search-close').on('click', function(e) {
        e.preventDefault();
        $('.search-box input').removeClass('active');
    });

    // Dropdown menu
    $('.menu-item-has-children').hover(function() {
        $(this).find('.sub-menu').stop(true, true).slideDown(200);
    }, function() {
        $(this).find('.sub-menu').stop(true, true).slideUp(200);
    });

    // Sticky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('#masthead').addClass('sticky');
        } else {
            $('#masthead').removeClass('sticky');
        }
    });

    // Counter animation
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Testimonial carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // Course carousel
    $('.course-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Instructor carousel
    $('.instructor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Video popup
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
});