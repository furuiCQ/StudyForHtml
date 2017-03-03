// JavaScript Document
/*window.onload=function(){
	document.getElementsByClassName("input").item(0).;
}*/
$(function(){
	$("input").click(function(e) {
        	/*var data=new XMLHttpRequest()||new ActiveXObject("Microsoft.XMLHTTP");
			data.open("GET","http://api.jisuapi.com/qqluck/query?qq=1182590636&appkey=44bef2a501648dab",true);
			data.send();
			data.onreadystatechange=function(){
				if(data.readyState==4 && data.status==200){
					console.log(data.responseText);
				}
			}*/
			//jq的ajax网路请求并访问数据
			$.ajax({
				type:"get",
				url:"http://api.jisuapi.com/qqluck/query?qq=1182590636&appkey=44bef2a501648dab",//url写异域的请求地址
				dataType:"jsonp",//加上datatype
				jsonpCallback:"cb",//设置一个回调函数，名字随便取，和下面的函数里的名字相同就行
				success:function(e){
						console.log(e.result);
						console.log(e.result.qq);
					}
				});
			
    });
	/*$("input").click(function(e) {
        	var data=new XMLHttpRequest()||new ActiveXObject("Microsoft.XMLHTTP");
			data.open("GET","../file/data.txt",true);
			data.send();
			data.onreadystatechange=function(){
					if(data.readyState==4 && data.status==200){
						console.log(data.responseText);
					}
			}
    });*/

});