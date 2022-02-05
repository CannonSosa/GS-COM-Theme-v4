(function ($) {
    var halo = {
        initBrandsSlider2: function() {
            var brandsSlider = $('[data-brands-slider-style2]');

            brandsSlider.each(function () {
                var self = $(this);
                var rows = parseInt($(this).data('brand-rows'));

                if (self.not('.slick-initialized')) {
                    self.slick({
                        rows: rows,
                        if (rows = 2) {
                            slidesPerRow: self.data('rows')
                        },
                        slidesToShow: self.data('rows'),
                        slidesToScroll: 1,
                        dots: false,
                        speed: 800,
                        arrows: true,
                        prevArrow: '<button type="button" aria-label="Previous Product" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                        nextArrow: '<button type="button" aria-label="Next Product" class="slick-next"><i class="fa fa-angle-right"></i></button>',
                        responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    if (rows = 2) {
                                        slidesPerRow: 1
                                    },
                                    slidesToShow: 4,
                                    rows: rows,
                                    dots: true,
                                    arrows: false,
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    if (rows = 2) {
                                        slidesPerRow: 1
                                    },
                                    slidesToShow: 3,
                                    rows: rows,
                                    dots: true,
                                    arrows: false,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    if (rows = 2) {
                                        slidesPerRow: 1
                                    },
                                    slidesToShow: 2,
                                    dots: true,
                                    rows: rows,
                                    dots: true,
                                    arrows: false,
                                }
                            }
                        ]
                    });
                }
            });
        }
    }
    halo.initBrandsSlider2();
})(jQuery);
