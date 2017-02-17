// JavaScript Document
$(function(){
	$(".menuJQ").hide();
	//$(".userJQ").click(function(e){
//	  $(".menuJQ").toggle();
//		/*var id=$(".userJQ").attr("id");
//		if(id==1){
//			$(".menuJQ").hide();
//			$(".userJQ").attr("id",2);
//		}else{
//			$(".menuJQ").show();
//			$(".userJQ").attr("id",1);
//		}*/
//	});	
	$(".userJQ").click(function(){
		$(".menuJQ").slideToggle(3000,"swing",function(){
			
		});
	});	
});
