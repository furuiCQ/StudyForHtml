// JavaScript Document
$(function(){
	$("summary").click(function(e) {
		var img0=$(this).children("img").get(0);
		var img1=$(this).children("img").get(1);
		if(img0.className=="on"){
			img0.src="img/plus.gif";
			img0.className="";
			img1.src="img/folder.gif";
		}else{
			img0.src="img/minus.gif";
			img0.className="on";
			img1.src="img/folderopen.gif";
		}
		
		
    });
	$("a").click(function(e) {
        $("rightNav").attr("src","http://www.baidu.com");
    });	
});