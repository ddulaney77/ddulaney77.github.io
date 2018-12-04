$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());