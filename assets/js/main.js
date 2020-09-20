/**************** NAV */
let button = $('.toggle-nav'),
    navbar = $('header');

button.on('click', function() {
  $('.menu').toggleClass('active');
  button.toggleClass('close-nav');
});

/**************** IMG HOVER */
// let front = $('.service-card'),
//     image = $('.service-img-wpr img');

// $(this).on('mouseover', function() {
//   // console.log('hi')
//   image.css('transform', 'scale(1.15)');
//   image.css('transition', '.5s');
// })


