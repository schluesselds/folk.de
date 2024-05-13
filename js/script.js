$(window).on("load", function () {

  // Preload
  $("#preload").fadeOut(500);

});

jQuery(document).ready(function () {

  // Progressbar About Us

  $('.locksmith').rProgressbar({
     percentage: 95,
     fillBackgroundColor: '#FFC107',
     backgroundColor: '#F8F8F8',
     borderRadius: '0px',
     height: '10px',
     width: '100%'
  });

  $('.security').rProgressbar({
     percentage: 70,
     fillBackgroundColor: '#FFC107',
     backgroundColor: '#F8F8F8',
     borderRadius: '0px',
     height: '10px',
     width: '100%'
  });

  $('.service').rProgressbar({
     percentage: 80,
     fillBackgroundColor: '#FFC107',
     backgroundColor: '#F8F8F8',
     borderRadius: '0px',
     height: '10px',
     width: '100%'
  });

  // Testimonials

  $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     nav: false,
     dots: false,
     autoplay: true,
     autoplayTimeout: 6000,
     responsive: {
        0: {
           items: 1
        },
        600: {
           items: 1
        },
        1000: {
           items: 1
        }
     }
  });

  // Scroll Top Button

  $('#scroll-top').click(function () {
     $('body,html').animate({
        scrollTop: 0
     }, 800);
     return false;
  });

  // Scroll Top

  $('#scroll-top').hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 50) {
        $('#scroll-top').fadeIn();
     } else {
        $('#scroll-top').fadeOut();
     }
  });

  // Scroll Menu

  $(".menu li").on("click", "a", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
        top = $(id).offset().top;
     $('body,html').animate({
        scrollTop: top
     }, 1500);
  });

  $("#logo, .wrapper-bg-header a, .wrapper-secure a").on("click", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
        top = $(id).offset().top;
     $('body,html').animate({
        scrollTop: top
     }, 1500);
  });

  //  Background Header Scroll

  $(window).scroll(function () {
     if ($(this).scrollTop() > 0) {
        $('header').css({
           'background-color': '#212121'
        });
     } else {
        $('header').css({
           'background-color': 'rgb(33, 33, 33, 0.5)'
        });
     }
  });

  // Mobile Menu

  $('#openmenu').click(function (event) {
     event.preventDefault();
     $('.wrapper-header-menu').animate({
        'left': 0
     }, 800);
  });

  $('#closemenu').click(function (event) {
     event.preventDefault();
     $('.wrapper-header-menu').animate({
        'left': '-320px'
     }, 800);
  });
  
  $('.menu li a').on("click", function (event) {
     event.preventDefault();
     $(".wrapper-header-menu").animate({
        'left': '-320px'
     }, 800);
  });

  // Ajax Send Appointment

  $('#sendappointment').click(function (event) {
     event.preventDefault();

     var name = $('input[name="name"]').val();
     var lastname = $('input[name="lastname"]').val();
     var phone = $('input[name="phone"]').val();
     var email = $('input[name="email"]').val();
     var date = $('input[name="date"]').val();
     var time = $('input[name="time"]').val();

     if (name == '' || lastname == '' || phone == '' || email == '' || date == '' || time == '') {

        $('.res-appointment').fadeIn().html('<span class="error">All fields must be filled.</span>');
        $('input').focus(function () {
           $('.res-appointment').fadeOut();
        });
     } else {
        $.ajax({
           url: '../appointment.php',
           type: 'POST',
           data: {
              name: name,
              lastname: lastname,
              phone: phone,
              email: email,
              date: date,
              time: time
           },
           dataType: 'html',
           success: function (data) {
              if (data == 'Send') {
                 $('.res-appointment').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');

                 $('input[name="name"]').val('');
                 $('input[name="lastname"]').val('');
                 $('input[name="phone"]').val('');
                 $('input[name="email"]').val('');
                 $('input[name="date"]').val('');
                 $('input[name="time"]').val('');
              }
           }
        }); // ajax
     }

  });


}); // ready