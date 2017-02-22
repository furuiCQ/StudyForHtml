$(function(){
	var fristSrc=$("img:eq(0)").attr("src");
	$(".imgBox").css("background","url("+fristSrc+") no-repeat ");
	
	$("img").click(function(e) {
		fristSrc=$(this).attr("src");
		$(".imgBox").css("background","url("+fristSrc+") no-repeat ");
		$("img").removeClass();
		$(this).addClass("on");
    });
});