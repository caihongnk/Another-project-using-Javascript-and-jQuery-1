(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);



//-----------------------blockA,blockb切换------------------------------------
var captionBtnA=$('#content-tab .caption .item').eq(0);
var captionBtnB=$('#content-tab .caption .item').eq(1);
var blockBtnsA=$('#blockA .block-caption .block-caption-item'); //blockA按钮集合
var blockBtnsB=$('#blockB .block-caption .block-caption-item');//blockB按钮集合

//切换BlockA或BlockB

captionBtnA.on("click",function(){
           $('#blockA').css("display","block");
           $('#blockA .block-content').css("display","block");
           $(this).addClass("item_focus").siblings().removeClass("item_focus")
           blockBtnsA.eq(0).addClass("block-caption-item_focus").siblings().removeClass("block-caption-item_focus")
           $('#blockA').triggerHandler("show");
})   

captionBtnB.on("click",function(){
           $('#blockB').css("display","block");
           $('#blockB .block-content').css("display","block");
           $(this).addClass("item_focus").siblings().removeClass("item_focus")
           blockBtnsB.eq(0).addClass("block-caption-item_focus").siblings().removeClass("block-caption-item_focus")
           $('#blockB').triggerHandler("show");
})

$('#blockA').on("show",function(){           //#blockA内容替换特效
        $('#blockB').css("display","none")
        $('#sub-content').css("display","none")

     for(var i=1; i<5;i++){
                   blockBtnsA.eq(i).on("click",function(){
                                   $('#blockA .block-content').css("display","none");
                                   $(this).addClass("block-caption-item_focus").siblings().removeClass("block-caption-item_focus")
                                   $('#sub-content').css("display","block")
                                   var index;
                                   index=$(this).index()-1;
                                   $('#sub-content').triggerHandler("changeContent",[subA[index].src,subA[index].locate,subA[index].add])

                   })
     }

                 blockBtnsA.eq(0).on("click",function(){            //All按钮被按时
                        $('#sub-content').css("display","none")
                        $('#blockA .block-content').css("display","block");
                        $(this).addClass("block-caption-item_focus").siblings().removeClass("block-caption-item_focus")
                   })
})

$('#blockB').on("show",function(){             //#blockB内容替换特效
        $('#blockA').css("display","none")
        $('#sub-content').css("display","none")

        for(var i=1; i<5;i++){
                   blockBtnsB.eq(i).on("click",function(){
                                 $('#blockB .block-content').css("display","none");
                                 $(this).addClass("block-caption-item_focus").siblings().removeClass("block-caption-item_focus")
                                 $('#sub-content').css("display","block")   
                                 var index;
                                 index=$(this).index()-1;
                                 $('#sub-content').triggerHandler("changeContent",[subB[index].src,subB[index].locate,subB[index].add])
                                                               
                   })
        }

          blockBtnsB.eq(0).on("click",function(){         //All按钮被按时
                 $('#sub-content').css("display","none")
                 $('#blockB .block-content').css("display","block");
                 $(this).addClass("block-caption-item_focus").siblings().removeClass("block-caption-item_focus")
          })
})


//$('#sub-content')内容替换

$('#sub-content').on("changeContent",function(event,pic,locate,add){
                     $('#sub-content .sub-content-pic img').attr("src","img/building-"+pic);
                     $('#sub-content .location a').text(locate);
                     $('#sub-content .address a').text(add);
})

$('#blockA').triggerHandler("show");    //初始状态,这个是需要的

