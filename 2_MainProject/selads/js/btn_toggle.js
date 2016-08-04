// join.html_dropbtn
$(document).ready(function(){
	$(".select_email").click(function(){  
	$(".select_content").toggle();
	});
});


// addProduct.html_dropbtn
$(document).ready(function(){
    $('.toggle_wrap').on('click',function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0)
            $(".btn_toggle_product span:first").css('color', '#00a651')
            $(".btn_toggle_product span:first").removeClass("ion-arrow-right-b").addClass("ion-arrow-down-b")
             $(".product_info").show()
        } else {
            $(this).attr('data-click-state', 1)
            $(".btn_toggle_product span:first").css('color', '#000')
            $(".btn_toggle_product span:first").removeClass("ion-arrow-down-b").addClass("ion-arrow-right-b")
            $(".product_info").hide()
        }
    });
});


