(function () {
    const slider = function () {

        const carouselSlider = document.querySelectorAll('.carousel-testimony');

        if (carouselSlider.length > 0) {

             testimonySlider = tns({
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