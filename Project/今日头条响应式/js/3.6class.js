// JavaScript Document
var apiKey="98a5097e8a21d71b89016f94247e781f";
var dataNum=30;//总数据条数
var onePageNumb=6;//每页显示的个数
var showNumb=0;//当前显示第几页
var newslist;//获取的所有数据
function lastClick(){
	 if(showNumb<=0){
		alert("已是第一页");
		return;
	 }
	 showNumb--;
	 console.log(".pageNumb:first-child");
	 showdData();
}
function nextClick(){
	if(parseInt(showNumb)==parseInt(newslist.length/onePageNumb-1)){
		alert("已是最后一页");
		return;
	}
	showNumb++;
	showdData();
}
function liClick(numb){
	console.log("liClick");
	showNumb=numb-1;
	showdData();
}
function showdData(){
		if(newslist!=null && newslist.length>0){
			var index=onePageNumb*showNumb;
			var end=onePageNumb*showNumb+onePageNumb;
			for(var i=index;i<end;i++){
				var obj=newslist[i];
				var li=$(".content li:eq("+(i%6)+")");
				li.children("img").attr("src",obj.picUrl);
				li.children("div").text(obj.title);
				li.click(function(e) {
                    window.location.href=obj.url; 
                });
			}
		}
}
$(function(){
	$.ajax({
			  type:"get",
			  url:"https://api.tianapi.com/meinv/?key="+apiKey+"&num="+dataNum,//url写异域的请求地址
			  success:function(e){
					  console.log(e);
					  if(e.code==200 && e.msg=="success"){
						  newslist=e.newslist;
						  if(newslist.length>0){
							 	 showdData();
						  		 $(".pageNumb").append("<li onClick='lastClick()'>上一页</li>");
								 for(var i=1;i<=newslist.length/onePageNumb;i++){
									$(".pageNumb").append("<li onClick='liClick(this.className)' class='"+i+"'>"+i+"</li>");
								 }
								 $(".pageNumb").append("<li onClick='nextClick()'>下一页</li>");
						  }
					  }else{
					  	alert(e.msg);
					  }
				  }
			  });
	
});
