(function () {
    var slider = function () {

        var carouselRoom = document.querySelectorAll('.carousel-room');

        if (carouselRoom.length > 0) {
            var carouselRoom = tns({
                container: '.carousel-room',
                items: 1,
                mode: 'carousel',
                autoplay: true,
                animateIn: 'tns-fadeIn',
                animateOut: 'tns-fadeOut',
                speed: 700,
                nav: true,
                controls: false,
                autoplayButtonOutput: false,
            });
        }

        var carouselSlider = document.querySelectorAll('.carousel-testimony');

        if (carouselSlider.length > 0) {

            var testimonySlider = tns({
                container: '.carousel-testimony',
                items: 1,
                mode: 'carousel',
                autoplay: true,
                animateIn: 'tns-fadeIn',
                animateOut: 'tns-fadeOut',
                speed: 700,
                nav: true,
                gutter: 20,
                controls: false,
                autoplayButtonOutput: false,
                responsive: {
                    0: {
                        items: 1,
                        gutter: 0
                    },
                    600: {
                        items: 2,
                        gutter: 20
                    },
                    1000: {
                        items: 3,
                        gutter: 20
                    }
                }
            });
        }

    }
    slider();
    
})()