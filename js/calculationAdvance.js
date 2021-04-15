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
			var doorStepVisit = $("#doorStepVisit").val();
			var extraDoorStepVisit = $("#extraDoorStepVisit").val();
			
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
				$(".l_City").html("PUNE");  //Pune
			}
			
			else if (city == 2) 
			{
				$(".l_City").html("MUMBAI"); //Mumbai
			}
			else if (city == 3) 
			{
				$(".l_City").html("AURANGABAD");  //Aurangabad
			}
			else if (city == 4) 
			{
				$(".l_City").html("NAGPUR");  //Nagpur
			}
			else if (city == 5) 
			{
				$(".l_City").html("NASHIK");  //Nashik
			}
			else if (city == 6) 
			{
				$(".l_City").html("SOLAPUR");  //Solapur
			}
			else if (city == 7) 
			{
				$(".l_City").html("NANDED");  //NANDED
			}
			else if (city == 8) 
			{
				$(".l_City").html("SATARA");  //"SATARA"
			}
			else if (city == 9) 
			{
				$(".l_City").html("KOLHAPUR");  //KOLHAPUR
			}
																					
		prajag_charges = 700;
		    if (doorStepVisit == 1 ) 
			{
				doorStepCharges= 300//pune
				$(".l_DoorStepArea").html("PUNE"); 
			}
			else if (doorStepVisit == 2) 
			{
				doorStepCharges= 500 //MUMBAI
				$(".l_DoorStepArea").html("MUMBAI"); 
			}
			else if (doorStepVisit == 3) 
			{
				doorStepCharges = 500;//Nashik
					$(".l_DoorStepArea").html("NASHIK"); 
			}
			else if (doorStepVisit == 4) 
			{
				doorStepCharges = 700; //Aurangabad
					$(".l_DoorStepArea").html("AURANGABAD"); 
			}
			else if (doorStepVisit == 5) 
			{
				doorStepCharges = 800; //Nagpur
					$(".l_DoorStepArea").html("NAGPUR"); 
			}
			else if (doorStepVisit == 6) 
			{
				doorStepCharges = 1500; //SOLAPUR 
					$(".l_DoorStepArea").html("SOLAPUR"); 
			}
			else if (doorStepVisit == 7) 
			{
				doorStepCharges = 1500; //NANDED 
					$(".l_DoorStepArea").html("NANDED"); 
			}
			else if (doorStepVisit == 8) 
			{
				doorStepCharges = 1500; //SATARA 
					$(".l_DoorStepArea").html("SATARA"); 
			}
			else if (doorStepVisit == 9) 
			{
				doorStepCharges = 1500; //KOLHAPUR 
					$(".l_DoorStepArea").html("KOLHAPUR"); 
			}
			else if (doorStepVisit == 10) 
			{
				doorStepCharges = 150; //OFFICE VISIT 
					$(".l_DoorStepArea").html("PUNE OFFICE VISIT"); 
			}
			
			
			//===================================================================
			if (extraDoorStepVisit == 1) 
			{
				extraDoorStepCharges= 0//0
					$(".l_ExtraDoorStepArea").html(" "); 
			}
			else if (extraDoorStepVisit == 2) 
			{
				extraDoorStepCharges= 300//pune
				$(".l_ExtraDoorStepArea").html("PUNE"); 
			}
			else if (extraDoorStepVisit == 3) 
			{
				extraDoorStepCharges= 500 //MUMBAI
				$(".l_ExtraDoorStepArea").html("MUMBAI"); 
			}
			else if (extraDoorStepVisit == 4) 
			{
				extraDoorStepCharges = 600;//Nashik
				$(".l_ExtraDoorStepArea").html("NASHIK"); 
			}
			else if (extraDoorStepVisit == 5) 
			{
				extraDoorStepCharges = 700; //Aurangabad
				$(".l_ExtraDoorStepArea").html("AURANGABAD"); 
			}
			else if (extraDoorStepVisit == 6) 
			{
				extraDoorStepCharges = 800; //Nagpur
				$(".l_ExtraDoorStepArea").html("NAGPUR"); 
			}
			else if (extraDoorStepVisit == 7) 
			{
				extraDoorStepCharges = 1500; //KOLHAPUR
					$(".l_ExtraDoorStepArea").html("KOLHAPUR"); 
			}
			else if (extraDoorStepVisit == 8) 
			{
				extraDoorStepCharges = 1800; //DELHI
					$(".l_ExtraDoorStepArea").html("DELHI"); 
			}
			else if (extraDoorStepVisit == 9) 
			{
				extraDoorStepCharges = 1800; //BANGALORE 
					$(".l_ExtraDoorStepArea").html("BANGALORE"); 
			}
			else if (extraDoorStepVisit == 10) 
			{
				extraDoorStepCharges = 2100; //HYDERABAD 
					$(".l_ExtraDoorStepArea").html("HYDERABAD"); 
			}
			else if (extraDoorStepVisit == 11) 
			{
				extraDoorStepCharges = 2100; //CHENNAI 
					$(".l_ExtraDoorStepArea").html("CHENNAI"); 
			}
			else if (extraDoorStepVisit == 12) 
			{
				extraDoorStepCharges = 2100; //KOLKATA 
					$(".l_ExtraDoorStepArea").html("KOLKATA"); 
			}
			
			else if (extraDoorStepVisit == 13) 
			{
				extraDoorStepCharges= 2000; //ALIBAGH
				$(".l_ExtraDoorStepArea").html("ALIBAGH"); 
			}
			else if (extraDoorStepVisit == 14) 
			{
				extraDoorStepCharges = 2000; //SHRIRAMPUR
				
				$(".l_ExtraDoorStepArea").html("SHRIRAMPUR"); 
			}
			else if (extraDoorStepVisit == 15) 
			{
				extraDoorStepCharges = 1300; //AMRAVATI
					$(".l_ExtraDoorStepArea").html("AMRAVATI"); 
			}
			else if (extraDoorStepVisit == 16) 
			{
				extraDoorStepCharges = 2000; //AKOLA
					$(".l_ExtraDoorStepArea").html("AKOLA"); 
			}
			else if (extraDoorStepVisit == 17) 
			{
				extraDoorStepCharges = 2000; //CHANDRAPUR
					$(".l_ExtraDoorStepArea").html("CHANDRAPUR"); 
			}
			else if (extraDoorStepVisit == 18) 
			{
				extraDoorStepCharges = 2000; //CHIPLUN
					$(".l_ExtraDoorStepArea").html("CHIPLUN"); 
			}
			else if (extraDoorStepVisit == 19) 
			{
				extraDoorStepCharges = 2000; //DHULE 
					$(".l_ExtraDoorStepArea").html(DHULE); 
			}
			else if (extraDoorStepVisit == 20) 
			{
				extraDoorStepCharges = 2000; //JALGAON 
					$(".l_ExtraDoorStepArea").html("JALGAON"); 
			}
			else if (extraDoorStepVisit == 21) 
			{
				extraDoorStepCharges = 2000; //JALNA 
					$(".l_ExtraDoorStepArea").html("JALNA"); 
			}
			else if (extraDoorStepVisit == 22) 
			{
				extraDoorStepCharges = 1200; //KARAD 
					$(".l_ExtraDoorStepArea").html("KARAD"); 
			}
			else if (extraDoorStepVisit == 23) 
			{
				extraDoorStepCharges = 2000; //LATUR 
					$(".l_ExtraDoorStepArea").html("LATUR"); 
			}
			else if (extraDoorStepVisit == 24) 
			{
				extraDoorStepCharges = 2000; //LATUR - UDGIR 
					$(".l_ExtraDoorStepArea").html("LATUR - UDGIR"); 
			}
			else if (extraDoorStepVisit == 25) 
			{
				extraDoorStepCharges = 1500; //NANDED 
					$(".l_ExtraDoorStepArea").html("NANDED"); 
			}
			else if (extraDoorStepVisit == 26) 
			{
				extraDoorStepCharges = 2000; //PARBHANI 
					$(".l_ExtraDoorStepArea").html("PARBHANI"); 
			}
			else if (extraDoorStepVisit == 27) 
			{
				extraDoorStepCharges = 2000; //RATNAGIRI 
					$(".l_ExtraDoorStepArea").html("RATNAGIRI"); 
			}
			else if (extraDoorStepVisit == 28) 
			{
				extraDoorStepCharges = 1200; //SANGLI 
					$(".l_ExtraDoorStepArea").html("SANGLI"); 
			}
			else if (extraDoorStepVisit == 29) 
			{
				extraDoorStepCharges = 1000; //SATARA 
					$(".l_ExtraDoorStepArea").html("SATARA"); 
			}
			else if (extraDoorStepVisit == 30) 
			{
				extraDoorStepCharges = 1500; //SOLAPUR 
					$(".l_ExtraDoorStepArea").html("SOLAPUR"); 
			}
			else if (extraDoorStepVisit == 31) 
			{
				extraDoorStepCharges = 1000; //TALEGAON 
					$(".l_ExtraDoorStepArea").html("TALEGAON"); 
			}
			else if (extraDoorStepVisit == 32) 
			{
				extraDoorStepCharges = 1300; //AHEMDNAGAR 
					$(".l_ExtraDoorStepArea").html("AHEMDNAGAR"); 
			}
			else if (extraDoorStepVisit == 33) 
			{
				extraDoorStepCharges = 1000; //REMOTE 
					$(".l_ExtraDoorStepArea").html("REMOTE"); 
			}
			else if (extraDoorStepVisit == 34) 
			{
				extraDoorStepCharges = 150; //OFFICE VISIT  
					$(".l_ExtraDoorStepArea").html("EXTRA PUNE OFFICE VISIT"); 
			}
			else if (extraDoorStepVisit == 35) 
			{
				extraDoorStepCharges = 2100; //EXTRA INDORE CITY VISIT 
					$(".l_ExtraDoorStepArea").html("EXTRA INDORE CITY VISIT"); 
			}
			
			
		 	 
        
		
		var totalCharges = stampduty + prajag_charges +regcharg +aspCharges+doorStepCharges+extraDoorStepCharges;
		  
        $("#sercharges").html(prajag_charges);
		$(".l_NOM").html(no_months);
        $(".l_MR").html(rent);
        $(".l_RD").html(deposit);
		
		 $("#l_stamp").html(stampduty);
        $("#regcharg").html(regcharg);
		$("#aspCharges").html(aspCharges);
		$("#doorStepCharges").html(doorStepCharges);
		$("#extraDoorStepCharges").html(extraDoorStepCharges);
			 
        $("#l_total").html(totalCharges);
     
       
        
       
		
       
        
		$("#oldmsg").html("");
		$("#smsg").html("PLEASE CHECK CALCULATED CHARGES");
		$('html,body').animate({
		scrollTop: $("#copybutton").offset().top},
		'slow');
		
		
		
        
		
		

       
}