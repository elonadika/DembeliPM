
/* Background Images
-------------------------------------------------------------------*/
var  pageTopImage = jQuery('#page-top').data('background-image');
var  aboutImage = jQuery('#about').data('background-image');
var  subscribeImage = jQuery('#subscribe').data('background-image');
var contactImage = jQuery('#contact').data('background-image');
var contributorsImage = jQuery('#contributors').data('background-image');
var techstackImage = jQuery('#techstack').data('background-image');

if (pageTopImage) {  jQuery('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (aboutImage) {  jQuery('#about').css({ 'background-image':'url(' + aboutImage + ')' }); };
if (subscribeImage) {  jQuery('#subscribe').css({ 'background-image':'url(' + subscribeImage + ')' }); };
if (contactImage) { jQuery('#contact').css({ 'background-image': 'url(' + contactImage + ')' }); };
if (contributorsImage) { jQuery('#contributors').css({ 'background-image': 'url(' + contributorsImage + ')' }); };
if (techstackImage) { jQuery('#techstack').css({ 'background-image': 'url(' + techstackImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {

	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/



	/* Main Menu   
	-------------------------------------------------------------------*/
	$('#main-menu #headernavigation').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		scrollOffset: 0,
		filter: '',
		easing: 'swing'
	});  

	/* Main Menu End  
	-------------------------------------------------------------------*/



	/* Time Countdown 
	-------------------------------------------------------------------*/
	$('#time_countdown').countDown({
        
         targetDate: {
             'day': 1,
             'month': 1,
             'year': 2016,
             'hour': 0,
             'min': 0,
             'sec': 0
         },
         //omitWeeks: true,

         targetOffset: {
            'day':      0,
            'month':    0,
            'year':     1,
            'hour':     0,
            'min':      0,
            'sec':      3
		},
		omitWeeks: true

	    });

    /* Time Countdown End
	-------------------------------------------------------------------*/




	/* Next Section   
	-------------------------------------------------------------------*/
	$('.next-section .go-to-about').click(function() {
    	$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
  	});
  	$('.next-section .go-to-subscribe').click(function() {
    	$('html,body').animate({scrollTop:$('#subscribe').offset().top}, 1000);
  	});
  	$('.next-section .go-to-techstack').click(function() {
    	$('html,body').animate({scrollTop:$('#techstack').offset().top}, 1000);
  	});
  	$('.next-section .go-to-page-top').click(function() {
    	$('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
    });
    $('.next-section .go-to-contributors').click(function () {
        $('html,body').animate({ scrollTop: $('#contributors').offset().top }, 1000);
    });

  	/* Next Section End
	-------------------------------------------------------------------*/




	/* Subscribe
	-------------------------------------------------------------------*/

    $('#subscribe-submit').click(function () {
        $('.subscribe-error').hide();

        var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        var emailVal = $('#subscribe-email').val();

        if (emailVal == "" || emailVal == "Email Address *") {
            $('.subscribe-error').html('<i class="fa fa-exclamation"></i> Email address required.').fadeIn();
            return false;

        } else if (!emailReg.test(emailVal)) {
            $('.subscribe-error').html('<i class="fa fa-exclamation"></i> Invalid email address.').fadeIn();
            return false;
        }

        var data_string = $('.news-letter').serialize();

        $('#subscribe-submit').hide();
        $('#subscribe-loading').fadeIn();
        $('.subscribe-error').fadeOut();

        $.ajax({
            type: "POST",
            url: "php/subscribe.php",
            data: data_string,

            //success
            success: function (data) {
                $('.subscribe-hide').hide();
                $('.subscribe-message').html('<i class="fa fa-check contact-success"></i><div>Thank you! You have been subscribed.<div>').fadeIn();
            },
            error: function (data) {
                $('.subscribe-hide').hide();
                $('.subscribe-message').html('<i class="fa fa-exclamation contact-error"></i><div>Something went wrong, please try again later.<div>').fadeIn();
            }

        }) //end ajax call
        return false;
    });

	/* Subscribe End
	-------------------------------------------------------------------*/


});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder 
-------------------------------------------------------------------*/
$(window).load(function () {    
    "use strict";
    $("#loader").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});
 /* Preloder End
-------------------------------------------------------------------*/
