// JavaScript Document
/*window.onload=function(){
	var inputBtn=document.getElementsByTagName("input").item(0);
	inputBtn.onclick=function(){
		var box_start=document.getElementsByClassName("box").item(0);
		if(box_start.id=="box_end"){
			box_start.id="";
			inputBtn.value="open";
		}else{
			box_start.id="box_end";
			inputBtn.value="close";
		}
	}
	
	
}*/
$(function(){
	$("input[type='button']").click(function(){
		/*if($(".box").css("width")=="0px"){
			$(".box").animate({width:100},2000)
			
		}else{
			$(".box").animate({width:0},2000)
		}*/
		//$(".box").css("background","green");
		/*$(".box").animate({backgroundColor: "gray"},2000);
		$("body").animate({scrollTop:200},4000);//*/
		$(".box").slideUp(1000);
		$(".box").slideDown(1000);	
	});
	
	
	$("p").css("width",$("li:first").width());//获取宽
	$("p").css("height",$("li:first").height());//高
	$("li").mouseenter(function(){
		var left=$(this).position().left;
		var top_value=$(this).position().top;
		var select_li=$(this);
		$("p").animate({top:top_value,left:left,width:$(this).width(),height:$(this).height()},500);
	});
	
	
	
	$("li").click(function(e) {
		$("li").css("background-color","");
       	$(this).css("background-color","red");
    });
	
});