$(function(){

//点击按钮后, 内容渐渐回缩特效
var content=$('#details .item .details .details-items'); 

$("#details-button").on("click",function(){
	   $(this).hide();
              //$(this).animate({width:"2.8rem", height:"1.7rem",top:"2.8rem",left:"1.47rem"},"slow") //按钮形状变化
              content.find('div').hide();
              content.animate({ height:"0rem"},"slow") ;
              //$("#details-button img").animate({ height:"0rem" },"slow")

})

//监听滚动条,使得内容伸展回原来状态

	window.addEventListener("scroll",function(){
                         if($(document).scrollTop()<=0){
	 		   content.find('div').show();
			   content.animate({width:"5.74rem",height:"3.5rem"},"slow")		   
			   $("#details-button").show();                                
                         }
	})











})//结尾



