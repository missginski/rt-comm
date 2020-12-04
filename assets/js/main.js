/**************** NAV */
let button = $('.toggle-nav'),
    navbar = $('header');

button.on('click', function() {
  $('.menu').toggleClass('active');
  button.toggleClass('close-nav');
});

/**************** SEND MAIL */
var SendMail = function () {
  var emailVal = $('#contact-email').val();
  if (isValidEmailAddress(emailVal)) {
      var params = {
          'action': 'SendMessage',
          'name': $('#name').val(),
          'email': $('#contact-email').val(),
          'subject': $('#phone').val(),
          'message': $('#message').val()
      };
      $.ajax({
          type: "POST",
          url: "php/sendMail.php",
          data: params,
          success: function (response) {
              if (response) {
                  var responseObj = $.parseJSON(response);
                  if (responseObj.ResponseData)
                  {
                      alert(responseObj.ResponseData);
                  }
              }
          },
          error: function (xhr, ajaxOptions, thrownError) {
              //xhr.status : 404, 303, 501...
              var error = null;
              switch (xhr.status)
              {
                  case "301":
                      error = "Redirection Error!";
                      break;
                  case "307":
                      error = "Error, temporary server redirection!";
                      break;
                  case "400":
                      error = "Bad request!";
                      break;
                  case "404":
                      error = "Page not found!";
                      break;
                  case "500":
                      error = "Server is currently unavailable!";
                      break;
                  default:
                      error = "Unespected error, please try again later.";
              }
              if (error) {
                  alert(error);
              }
          }
      });
  } else
  {
      alert('Your email is not in valid format');
  }
};


