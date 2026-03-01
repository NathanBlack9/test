$(() => {
  $('.js-card-slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    swipe: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 900 + 1,
        settings: {
          autoplay: true,
          arrows: false,
          autoplaySpeed: 2000,
        },
      },
    ]
  });


  $(document).on('click', '[data-href]', function (еvent) {
    if ($(еvent.target).closest('a, button').length) {
      return;
    }

    еvent.stopPropagation();
    const $this = $(this);
    const href = $this.data('href');

    window.open(href, '_blank');
  });

  $(document).on('click', '.js-like', function (e) {
    e.preventDefault();
    const $this = $(this);

    $this.toggleClass('--is-liked');
  });

})

