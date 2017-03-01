// JavaScript Document
//$(function(){
//	var i=1;
//	$(".arrow").click(function(e) {
//		if(i>=5){
//			i=0;
//		}
//		moveBox(i);
//        	i++;
//    });
//	function moveBox(i){
//		$(".moveBox").css("transition",".5s");
//		$(".moveBox").css("top",(-(i*100))+"%");
//	}
//
//}); 
window.onload=function(){
	var arrowBtn=document.getElementsByClassName("arrow").item(0);
	var moveBox=document.getElementsByClassName("moveBox").item(0);
	var length=moveBox.getElementsByTagName("div").length;
	var pointer=document.getElementsByClassName("pointer").item(0);
	var pointerLength=pointer.getElementsByTagName("li").length
	var i=0;
	arrowBtn.onclick=function(){
		i++;
		if(i>=length){
			i=0;
		}
		moveBox.style.top="-"+i*100+"%";
		
		for(var j=0;j<pointerLength;j++){
			var li=pointer.getElementsByTagName("li").item(j);
			if(j==i){
					li.className="on";
			}else{
				li.className="";
			}
		}
	}
	window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
	var lastClientY=0
	function scrollFunc(e){
		if(e.deltaY>0){//判断滚动方向 大于0为向下滚动小于0为向上滚动
			if(e.clientY!=lastClientY){
				setTimeout(function(){
					lastClientY=0;
				},500);
				lastClientY=e.clientY;
				i++;
				if(i>=length){
					i=0;
				}
				
				moveBox.style.top="-"+i*100+"%";
				for(var j=0;j<pointerLength;j++){
					var li=pointer.getElementsByTagName("li").item(j);
					if(j==i){
							li.className="on";
					}else{
						li.className="";
					}
				}
			}
		}else{
			if(e.clientY!=lastClientY){
				setTimeout(function(){
					lastClientY=0;
				},500);
				lastClientY=e.clientY;
				if(i<0){
					i=4;
				}
				moveBox.style.top="-"+i*100+"%";
				for(var j=0;j<pointerLength;j++){
					var li=pointer.getElementsByTagName("li").item(j);
					if(j==i){
							li.className="on";
					}else{
						li.className="";
					}
				}
				i--;
			}
		}
	}
}
