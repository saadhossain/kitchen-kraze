export const featureSlideSettings = {
    // dots: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 12,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 12,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 12,
                initialSlide: 0
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 12
            }
        }
    ]
};