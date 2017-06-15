$(document).ready(function() {

	/*---------stellar paralax-------*/
	$.stellar({
		horizontalOffset: 50,
		responsive: true

	});

	/*-------owl slider--------*/
  $(".owl-carousel").owlCarousel({
		loop: true,
  	responsiveClass: true,
  	navText: "",
  	responsive : {
        0 : {
            items : 1,
            nav : true
        } 
    }
  });

  /*--------popup----------*/
  $('.popup').magnificPopup({type:'image'});
  $('.popup_c').magnificPopup();


	
	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize()
	});

	/*------tabs top_phone--------*/
	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	/*------tabs header--------*/
	$(".tabs_header .wrapper .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	/*------tabs contacts---------*/
	$(".s_contacts .wrapper .tab_item").not(":first").hide();
	$(".s_contacts .tab").click(function() {
		$(".s_contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .wrapper .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	/*------tabs bottom_phone--------*/
	$(".bottom_phone .tab_item").not(":first").hide();
	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		var clear = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				//$(clear).trigger("reset");  //очистить форму после заполнения
			}, 1000);
		});
		return false;
	});
	
});
/*----------animation----------*/
$(window).load(function(){
	
	$("header .top_header h1").animated("fadeInDown", "fadeOut");
	$("header .top_header h2").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profy_item").animated("fadeInRight", "fadeOutRight");
	$("section.profy form").animated("zoomInRight", "fadeOut");
	$("section.s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInUp", "fadeOut");
})