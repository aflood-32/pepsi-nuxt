$(window).on('load', function () {
    $preloader = $('.loaderArea'),
    $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    /* init animation */
    $('body').addClass('loaded');

});

$(document).ready(function() {

	/* menu */
	$('.nav-trigger, #menu-hide').on('click', function(){
		$('#nav').toggleClass('active');
		$('.nav-trigger').toggleClass('active');
		$('body').toggleClass('menu-active');
		return false;
	});

	/* main-text */
	$repeatedText = $('#mainTitleB').text();
	$repeatedText = $repeatedText + $repeatedText + $repeatedText;
	$('#mainTitleBefore').text($repeatedText);
	$('#mainTitleAfter').text($repeatedText);

	/* key */
	// $('.over-key').on('click', function(){
	// 	$('.key-form-wrap').addClass('active');
	// 	return false;
	// });

	/**/
	$(".scroll-box").mCustomScrollbar({});

	/* tooltip */
	$('[data-toggle="tooltip"]').tooltip({
		html: true,
		container: 'body',
		template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
	});

  document.querySelectorAll("[data-id='sidebar-btns']").forEach((elem) => {
    elem.onclick = function (e) {
      e.preventDefault();
      $('#nav').removeClass('active');
      $('.nav-trigger').removeClass('active');
      $('body').removeClass('menu-active');
    }
  })

});
