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
		$(".box").css("background","green");
		$(".box").animate({backgroundColor: "gray"},2000);
	});
});