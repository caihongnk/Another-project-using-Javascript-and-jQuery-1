$(function(){

//----------------------------------------------------版头 搜索框-------------------------------------------------
$(".ui-search-input") .on("focus",function(){ $(this).attr("placeholder"," ")   });        //输入框在输入时placeholder字消失

//-----------------------------------------------------回到顶部------------------------------------------------------------------
		window.addEventListener("scroll",function(){

		                if( $('html').scrollTop()>=1.4*window.screen.height ){             //监听滚动条
		                	     $(' .backTop').show();
		                } else{
		                	      $(' .backTop').hide();
		                }
		})

		$(' .backTop').on("click",function(){
                                      $('html').scrollTop(0);
		})










})