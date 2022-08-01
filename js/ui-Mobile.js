
$.fn.UiSearch=function(){
       var ui=$(this); 
       $('.ui-search-selected',ui).on("click",function(){
       	$('.ui-search-select-list').show();
       	return false;
       })

       $('.ui-search-select-list a',ui).on("click",function(){
           var text=$(this).text();
       	 $('.ui-search-select-list').hide();
       	 $('.ui-search-selected').text(text);
             $('.ui-search-selected').css("textAlign","center")
           return false;
       })


       $('body').on("click",function(){
       	$('.ui-search-select-list').hide();

       })
}

$.fn.BannerSlider=function()
{
       var ui=$(this);
       var pictures=$('.banner-slider-wrap .item',ui),
            preBTN=$('.ui-slider-arrow .left ',ui),
            nextBTN=$('.ui-slider-arrow .right',ui),
            dots=$('.ui-slider-process .item',ui),
            wrap=$('.banner-slider-wrap '),
            width=$('.banner-slider-wrap .item').eq(0).width(),
            enableAuto=true;
            var current=0;
            var size = $('.banner-slider-wrap .item').length;

            $('.banner-slider').on("mouseover",function(){                  //鼠标进入区域,自动连播停止
                   enableAuto=false; 
                  
            })
           $('.banner-slider').on("mouseout",function(){                    //鼠标进入区域,自动连播开始
                  enableAuto=true; 
                   
            })

            preBTN.on("click",function(){                  //鼠标点击后退按钮,图片后
                  wrap.triggerHandler('move_prev')
                  return false; 
            })

            nextBTN.on("click",function(){                 //鼠标点击前进按钮,图片前进
                   wrap.triggerHandler('move_next')  
                   return false;
                    
            })
           
           dots.on("click",function(){
           	var index=$(this).index();
           	     current=index;
           	wrap.triggerHandler('move_to',current)      //小圆点被点中, move to 相应
                    return false;
           })

             
           wrap.on('move_to',function(event,current){        
                    wrap.css({ "left" : current*width*(-1), "transition": "all .8s "  });
                    dots.eq(current).siblings().removeClass("item_focus");
                    dots.eq(current).addClass("item_focus");
           }).on('auto_play',function(){
           	        setInterval(function(){  
           	        enableAuto&&wrap.triggerHandler('move_next');           
   	        },2000)
     
           }).on('move_prev',function(){
           	if(current==0){ current=size-1}else{ current=current-1}
                   wrap.triggerHandler('move_to',current)  
 
           }).on('move_next',function(){
           	if(current==size-1){ current=0}else{ current=current+1}
                   wrap.triggerHandler('move_to',current)  
           })
           .triggerHandler('auto_play');
  
 }//$.fn.UiSearch函数结束   



     

 //-----------------------------menu-lis-----------------------------------   
$.fn.menuDisplay=function(){
var ui=$(this),
      lisItem=$('.ui-menu-list-item',ui),
        detail=$('.ui-menu-detail',ui),
     caption=$('.menu-detail-group .menu-detail-group-caption',ui),
        items=$('.menu-detail-group a',ui),
        index=0;
 
      lisItem.on("mouseover", function(){

               detail.show()
               index=$(this).index()

               for(var i=0; i<caption.length; i++){          //循环标题
                       caption.eq(i).text( menuData[index].cap[i] )
               }
      
                for(var i=0; i<items.length; i++){           //循环a标签
                  items.eq(i).text( menuData[index].items[i] )
               }
               
                lisItem.eq(index).css({"background-color":"white", "color":"#1fa4f0"}) //变背景色
                $('.menu-list-item-title').eq(index).addClass('change'); //改变伪类图标
      }).on("mouseout", function(){
               detail.hide()
                lisItem.eq(index).css({"background-color":"#1fa4f0", "color":"white"})
               $('.menu-list-item-title').eq(index).removeClass('change');
      })

      detail.on("mouseover", function(){
               detail.show()
               lisItem.eq(index).css({"background-color":"white", "color":"#1fa4f0"})
               $('.menu-list-item-title:before').eq(index).css( "background-position","0 -22px")
               $('.menu-list-item-title').eq(index).addClass('change');
      }).on("mouseout", function(){
               detail.hide()
               lisItem.eq(index).css({"background-color":"#1fa4f0", "color":"white"})
               $('.menu-list-item-title').eq(index).removeClass('change');
      })


}//--$.fn.menuDisplay--
	
	


// ui-cascading
$.fn.UiCascading = function(){
	var ui = $(this);
	var selects = $('select',ui);

	selects
	.on('change',function(){
		var val = $(this).val();
		var index = selects.index(this);

		//	触发下一个 select 的更新，根据当前的值
		var where = $(this).attr('data-where');
		where = where ? where.split(',') : [];
		where.push( $(this).val() );

		selects.eq(index+1)
			.attr('data-where',where.join(','))
			.triggerHandler('reloadOptions');
		//	触发下一个之后的 select  的初始化（清除不应该的数据项）
		ui.find('select:gt('+ (index+1) +')').each(function(){
			$(this)
			.attr('data-where','')
			.triggerHandler('reloadOptions');
		})
			

	})
	.on('reloadOptions',function(){
		var method = $(this).attr('data-search');
		var args = $(this).attr('data-where').split(',');
		var data = AjaxRemoteGetData[ method ].apply( this, args );
		var select = $(this);
		select.find('option').remove();
		$.each( data , function(i,item){
			var el = $('<option value="'+item+'">'+item+'</option>');
			select.append(el);
		});
	});

	selects.eq(0).triggerHandler('reloadOptions');
}


// 页面的脚本逻辑

$(function(){

$('.ui-search').UiSearch();          //搜索条

$('.ui-slider').BannerSlider();      //banner图

$('.ui-menu-list').menuDisplay();

$('.ui-cascading').UiCascading();






















})  //开头的结尾