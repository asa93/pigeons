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

	$('.navbar-toggler, .navbar-brand').click(function(){
	 	collapseOffCanvas();
    });

	$("#faq button").click(function(){
		$(this).parent(".question-collapse").toggleClass("active").siblings(".question-collapse").removeClass("active");
		$("#faq .question-collapse:not(.active)").find(".collapse.show").removeClass("show");
	});

	$("#Traits .nav-link").click(function(){
				var category = $(this).attr("id").replace("-tab", "");
					var imagemax = 8;
				if( $(".tab-pane#" + category).hasClass("show") || $(".tab-pane#" + category).hasClass("loaded")){}else{
					for( var img=1; img <= imagemax; img++){
						$(".tab-pane#" + category).addClass("loaded");
						$("#carousel" + category).find(".carousel-inner").append('<div class="carousel-item"><div class="card"><div class="pigeon-img"><div class="d-flex justify-content-center" style="background-color:#001620;"><div class="spinner-border text-light my-auto" role="status"><span class="visually-hidden">Loading...</span></div></div><img src="images/pigeons/'+category+'/'+img+'.png" class="d-block w-100" alt=""></div><div class="carousel-caption"><div class="py-2"><p class="xs text-center">'+category+'</p><h5>Horns</h5></div><div class="percentage py-2"><h5>50%</h5><p class="xs text-center">pudgy pigeons with this trait</p></div></div></div></div>');
					};
					$("#carousel" + category).find(".carousel-inner .carousel-item:first-of-type()").addClass("active");
				}
	});
});

$(window).scroll(function(){
	var winH = $(window).height();
	var scroll = $(window).scrollTop();
	scrollbutton();
});