// JavaScript Document
$(function(){
	$("input:eq(0)").click(function(e) {
		
		setInterval(function(){//设置计时器
						console.log($(this));
						var date=new Date();//获得当前时间date对象
						$(".box").text(date);
						},1000);
		$(".box").text(function(index) {
						if(index%2==1){
							$(this).css("backgroundColor","gray");
						}else{
							$(this).css("backgroundColor","red")
						}
						$(this).text("123");
					
        });
    });
});