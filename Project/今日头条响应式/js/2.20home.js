// JavaScript Document
/*js版导航栏效果*/
$(function(){
	$("li:first").css("backgroundColor","red");
	setPCSS($("li:first"));
	settingLi($("li:first"));
	$("li").click(function(e) {
		$("li").css("backgroundColor","");
      	$(this).css("backgroundColor","red");
		settingLi($(this));
    });
	function settingLi(selectLi){
		$("li").hover(
			function(){
				setPCSS($(this));
			}
			,function(){
			});
		$("ul").hover(
			function(){
			},
			function(){
				setPCSS(selectLi);
			}
		);
	}
	function setPCSS(selectLi){
		$("p").css({
			"width":selectLi.width(),
			"height":selectLi.height(),
			"left":selectLi.position().left,
			"top":selectLi.position().top});
	}
});
/*使用animation实现，但是存在动画队列的问题，
$(function(){
	$("li:first").css("backgroundColor","red");
	$("p").css("width",$("li:first").width());//获取宽
	$("p").css("height",$("li:first").height());//高
	$("li").hover(
		 function () {
			var left=$(this).position().left;
			var top_value=$(this).position().top;
			var select_li=$(this);
			$("p").animate({top:top_value,left:left,width:$(this).width(),height:$(this).height()},500);
		 },
		 function(){
		 }
	);
	$("ul").hover(
		function(){
		},
		function () {
			var left_value=$("li:first").position().left;
			var top_value=$("li:first").position().top;
			var width=$("li:first").width();
			$("p").animate({top:top_value,left:left_value,width:width,},500);
		 }
	);

	$("li").click(function(e) {
		$("li").css("background-color","");
       	$(this).css("background-color","red");
       	var selectLi=$(this);
	    setLi(selectLi);
    });
	function setLi(selectdata){
		$("li").hover(
			 function () {
				var left=$(this).position().left;
				var top_value=$(this).position().top;
				$("p").css("width",$(this).width());//获取宽
				$("p").css("height",$(this).height());//高
				$("p").css("left",$(this).position().left);//获取宽
				$("p").css("top",$(this).position().top);//高
				$("p").animate(
				{top:top_value,left:left,width:$(this).width(),height:$(this).height()},500);
			 },
			 function(){
			 }
		);
		$("ul").hover(
			function(){
			},
			function () {
				var left_value=selectdata.position().left;
				var top_value=selectdata.position().top;
				$("p").stop(true);
				$("p").animate(
				{top:top_value,left:left_value,width:selectdata.width(),height:selectdata.height()},500);
			 }
		);
	}
	
});*/
