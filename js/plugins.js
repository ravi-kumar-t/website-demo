// Plugins initialization
jQuery(document).ready(function($) {
    // Initialize all carousels
    if ($.fn.owlCarousel) {
        $('.owl-carousel').each(function() {
            var options = $(this).data('carousel-options');
            if (options) {
                $(this).owlCarousel(JSON.parse(options.replace(/'/g, '"')));
            }
        });
    }

    // Initialize magnific popup
    if ($.fn.magnificPopup) {
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    }

    // Counter Up
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    // Waypoints
    if ($.fn.waypoint) {
        $('.counter').waypoint(function() {
            $(this.element).counterUp({
                delay: 10,
                time: 1000
            });
        }, {
            offset: '90%'
        });
    }

    // Sticky header
    if ($.fn.sticky) {
        $('#header').sticky({
            topSpacing: 0,
            zIndex: '999'
        });
    }

    // Preloader
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
});