// JavaScript Document
$(function(){
	var isClick=false;
	$(".airPlane").mousedown(function(e) {
        isClick=true;
    });
	$(".airPlane").mouseup(function(e) {
        isClick=false;
    });
	$("body").mousemove(function(e) {
        if(isClick){
			$(".airPlane").css("top",e.clientY);
			$(".airPlane").css("left",e.clientX);
		}
    });
	setInterval(function(){ 
		var bullet=$("<div></div>");
		bullet.css("width","5px");
		bullet.css("height","20px");
		bullet.css("background","blue");
		bullet.css("position","relative");
		bullet.css("margin-left","22.5px");
		bullet.css("margin-top","-15px");
		bullet.css("top",$(".airPlane").css("top"));
		bullet.css("left",$(".airPlane").css("left"));
		bullet.animate({top:'0'},3000,"linear",function(){
			$(this).remove();
		});
		$("body").append(bullet);
	},1000);
	
	
});