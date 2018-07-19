$(window).scroll(function() {
        var currentScrollTop = $(window).scrollTop();
	if ($(window).width() > 768) {
            // PC Menu Scrolled
            if(currentScrollTop > $(".header").outerHeight()) {
                $(".header").addClass("fixed");
            } else {
                $(".header").removeClass("fixed");
            }
        }
});


$(function(){
	    // 自動裁圖
    $('.imgLiquid').imgLiquid({
        fill: true, horizontalAlign: "center", verticalAlign: "center"
    });
    // 自動裁圖
    $('.imgLiquid2').imgLiquid({
        fill: false, horizontalAlign: "center", verticalAlign: "center"
    });

   //為桌機板
  $(window).scroll(function () {   
        var y = $(this).scrollTop();
        if (y > 100 ) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }       
  });

	// /*footer_btn gotop*/
	$(".gotop").click( function(){		
		jQuery("html,body").animate({
            scrollTop:0
        },1000);		
	});


	/*首頁 漢堡選單開闔*/
	$('.haeder_ham').click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$('.s_menu').removeClass("active");
		}else{
			$(this).addClass("active");
			$('.s_menu').addClass("active");
		}
	});


	$('.s_menu_dropdown').click(function() {
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).parent("li").children('.s_menu_dropdown_list').removeClass("active");
		}else{
			$(this).parent("li").children('.s_menu_dropdown_list').addClass("active");
			$(this).addClass("active");
		}
	});

	


});
