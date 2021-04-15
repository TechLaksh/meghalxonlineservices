/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function () {

	$("#preloader").fadeOut("slow");

});


$(document).ready(function () {
	$("#add-row-Labor").click(function () {
		// var formcity = $("#form_city").val();
		// var fromNumber = $("#form_number_of_months").val();
		// var formAgreement = $("#form_agreement").val();
		// var formAvarage = $("#form_avarage_monthly").val();
		// var formRefundable = $("#form_refundable").val();
		// var markup = "<tr><td>" + formcity + "</td><td>" + fromNumber + "</td><td>" + formAgreement + "</td><td>" + formAvarage + "</td><td>" + formRefundable + "</td></tr>";
		// $("#labor-table tbody").append(markup);
		$("#labor-table").slideToggle();
	});
});
/* ========================================================================= */
/*  scroling header
/* ========================================================================= */

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	//>=, not <=
	if (scroll >= 150) {
		$("#navigation").addClass("darkHeader");
		$("#navigation").removeClass("phentHeader");
	} else {
		$("#navigation").removeClass("darkHeader");
		$("#navigation").addClass("phentHeader");
	}
});  

/* ========================================================================= */
/*  scroling header
/* ========================================================================= */

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	//>=, not <=
	if (scroll >= 850) {
		$(".backgroundourApproach").removeClass("ourApproachmove");
	} else {
		$(".backgroundourApproach").addClass("ourApproachmove");
	}
}); //missing );

/* ========================================================================= */
/*  scroling header
/* ========================================================================= */
$(function () {
	$(".mouseicon").click(function () {
		$("html, body").stop().animate({
			scrollTop: 630
		}, 1500, "easeInOutExpo")
	});
});

$(document).ready(function () {

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */
	$(".phone-icon-togle").hover(function () {
		$(this).toggleClass('hoverhshow');
	})

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function () {
			console.log('begin scrolling');
		},
		onComplete: function () {
			console.log('done scrolling');
		}
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			$("#navigation").css("background-color", "#000");
		} else {
			$("#navigation").css("background-color", "#000");
		}
	});

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */

	// var slideHeight = $(window).height();

	// $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);

	// $(window).resize(function () {
	// 	'use strict',
	// 		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
	// });


	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */


	// portfolio filtering

	$(".project-wrapper").mixItUp();


	$(".fancybox").fancybox({
		padding: 0,

		openEffect: 'elastic',
		openSpeed: 650,

		closeEffect: 'elastic',
		closeSpeed: 550,

		closeClick: true,
	});

	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */

	$('#facts').parallax("50%", 0.3);

	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
	$(".number-counters").appear(function () {
		$(".number-counters [data-to]").each(function () {
			var e = $(this).attr("data-to");
			$(this).delay(6e3).countTo({
				from: 50,
				to: e,
				speed: 3e3,
				refreshInterval: 50
			})
		})
	});

	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */


	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			$("#back-top").fadeIn(200)
		} else {
			$("#back-top").fadeOut(200)
		}
	});
	$("#back-top").click(function () {
		$("html, body").stop().animate({
			scrollTop: 0
		}, 1500, "easeInOutExpo")
	});

});


/* banner effects */

$(document).ready(function () {
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$(".carousel-inner").mousemove(function (e) {
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -5 - 150;
		var newvalueY = height * pageY * -1 - 50;
		$('.carousel-inner').css("background-position", newvalueX + "px");
	});
});
/* mobile nav effectx */
$(function () {
	$("#sliderightNav").click(function () {
		$("#slidenavigation").toggleClass("slideeffects");
	});
	$(".divcoversMobilr").click(function () {
		$("#slidenavigation").toggleClass("slideeffects");
	});
	$('.frequenty-asked-qes').click(function () {
		$(this).siblings('.frequenty-asked-awns').slideToggle();
		$(this).children('.slider-arrow').toggleClass("min-icon");
	})
});

// counter

$(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 1);
        }
    }

    $(".c-section4").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('1000');
        $(this).data("isCounting", false);
    });

    function startCount() {
        $(".c-section4").each(function () {
            count($(this));
        });
    };

    $(window).scroll(function () {
        startCount();
    });

    startCount();
});

function calculate() {
	
	debugger;    
		    var type = $("#type").val();
			var city = $("#city").val();
			var propertyArea = $("#propertyArea").val();
			
	        var rent = $("#form_avarage_monthly").val();
			var no_months = $("#form_number_of_months").val();
			var deposit = $("#form_refundable").val();
						
			var nyear = (no_months) / 12;
		    var totalamt = (rent * no_months) + (deposit * 0.10 * nyear);
            var stamp = ((totalamt * 0.25) / 100);
		    stampduty = Math.ceil(stamp);

            if (stampduty < 100) {
                stampduty = 100;
            }
			
			
			

         
			
        
          
          var rural = 500;
          var regcharg =1000;
		  var aspCharges= 350


           

            var prajag_charges = 0;
            var l_gvt = 0;
            var regcharg = 0;
            var tax = 0;
            
            var i_disk ;
            

            $("#l_month").html(no_months);
            $("#l_stamp").html(stampduty);
			 $("#l2_stamp").html(stampduty);


          if (propertyArea == 1)
        {
            $(".l_UrbanRural").html("URBAN");
			var regcharg=1000;
			 $(".regcharg").html(regcharg);
 
        }
        else
        {
            $(".l_UrbanRural").html("RURAL");
            var regcharg=500;
			$(".regcharg").html(regcharg);
 
			
        }
																					
		
		    if (city == 1) 
			{
				prajag_charges = 1000;  //Pune
			}
			else if (city == 2) 
			{
				prajag_charges = 1200; //Thane
			}
			else if (city == 3) 
			{
				prajag_charges = 1200;//Mumbai
			}
			else if (city == 4) 
			{
				prajag_charges = 1300; //Aurangabad
			}
			else if (city == 5) 
			{
				prajag_charges = 1700; //Nagpur
			}
			else if (city == 6) 
			{
				prajag_charges = 1000; //Nashik
			}
			else if (city == 7) 
			{
				prajag_charges = 1200; //Solapur
			}
			
		 	 
        
		
		var totalCharges = stampduty + prajag_charges +regcharg +aspCharges;
		  
        $("#sercharges").html(prajag_charges);
		$(".l_NOM").html(no_months);
        $(".l_MR").html(rent);
        $(".l_RD").html(deposit);
		
		 $("#l_stamp").html(stampduty);
        $("#regcharg").html(regcharg);
		$("#aspCharges").html(aspCharges);
			 
        $("#l_total").html(totalCharges);
     
       
        
       
		
       
        
		$("#oldmsg").html("");
		$("#smsg").html("PLEASE CHECK CALCULATED CHARGES");
		$('html,body').animate({
		scrollTop: $("#copybutton").offset().top},
		'slow');
		
		
		
        
		
		

       
}