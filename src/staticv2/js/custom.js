// Functions
function scrollbutton(){
	if( $(window).scrollTop() >= $("#main-btn").offset().top ){
		$("#main-btn .btn").removeClass("position-relative").addClass("position-fixed");
	}else{
		$("#main-btn .btn").removeClass("position-fixed").addClass("position-relative");
	};
};

function collapseNav(){
	$(".navbar-collapse").css("transform", "translateX(100%)");
	 	setTimeout(function(){
        	$(".navbar-collapse").collapse('hide').removeAttr("style");
	 	}, 500);
};

function collapseOffCanvas(){
  		$(".offcanvas").offcanvas('hide');
};

// Custom
$(document).ready(function(){

	scrollbutton();

	$('.navbar-collapse .nav-link, main, .navbar-brand').click(function(){
	 	collapseNav();
    });

	// $('.navbar-collapse .nav-link:not(.btn)').click(function(){
	$('.navbar-toggler, .navbar-brand').click(function(){
	 	collapseOffCanvas();
    });



	$("#faq button").click(function(){
		$(this).parent(".question-collapse").toggleClass("active").siblings(".question-collapse").removeClass("active");
		$("#faq .question-collapse:not(.active)").find(".collapse.show").removeClass("show");
	});


	$("#Traits .nav-link, #background-tab").click(function(){
				var category = $(this).attr("id").replace("-tab", "");
				if($(".tab-pane#" + category).hasClass("loaded")){
					// nothing happen
				}else{
					$(".tab-pane#" + category).find(".carousel-inner").load("include/carousel-" + category + ".html");
					$(".tab-pane#" + category).addClass("loaded");
				};

	});
});

$(window).scroll(function(){

	var winH = $(window).height();
	var scroll = $(window).scrollTop();

	scrollbutton();

});