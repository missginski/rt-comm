let button = $('.toggle-nav'),
    navbar = $('header');

button.on('click', function() {
  $('.menu').toggleClass('active');
  button.toggleClass('close-nav');
});


