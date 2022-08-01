
////--------------------------------------------------通用----------------------------------------------------


//改变背景颜色函数:
function bgColor(ele,color){
ele.css("background-color",color);
}
//改变字体颜色函数:
function charColor(ele,color){
ele.css("color",color);             
}

// class="changeRed" 用于想hover字体改变成红色
$('.changeRed').hover( function(){ $(this).css("color","red");}, function(){ $(this).css("color","gray"); })

$('a').hover(function(){  charColor($(this),"red") }, function(){ charColor($(this),"gray")})    //所有a标签的特效
//----------------------------------------------------header----------------------------------------------------
//----------------------------------------------------------------------------------dropdown下拉菜单特效

function dropDown(ele, array,fontSize,charColor1,charColor2, bgColor1,bgColor2,btnColor1,btnColor2){        //charColor下拉菜单字体的颜色,bgColor下拉菜单字的背景颜色, 
            function creatDiv()                                    //btnColor 每个li项的背景颜色; 1,2各代表不同颜色
            {
	 //1.创建下拉div
	 var obj='<div class="dropDiv"></div>'; 
              ele.append(obj);
             for( i in array ){ $('.dropDiv').append("<div>"+array[i]+"</div>") ; }
             //2.设置下拉框子div样式
             $('.dropDiv div').css({"font-size":fontSize,"z-index":1000,"position":"relative","color":"gray", "background-color":bgColor1});
             //3.hover时
             $('.dropDiv div').hover(function(){ $(this).css("background-color",bgColor2 ) ; $(this).css("color",charColor1 ) }, function(){ $(this).css("background-color",bgColor1) ; $(this).css("color",charColor2 )} ) 
              } 
              //取消下拉特效的函数
             function cancelDrop(){ $('.dropDiv').remove()  }   
            //整合
            ele.hover( function(){ $(this).css({ "background-color":btnColor2, "color":"red" });  creatDiv($(this),array) }, function(){ cancelDrop(); $(this).css({ "background-color":btnColor1, "color":"gray"})} )	
}


//array数组:
var  arr0=["已买到的宝贝","我的足迹"],
       arr1=["收藏的宝贝","收藏的店铺"],
       arr2=[],
       arr3=[ "免费开店","已卖出的宝贝","出售中的宝贝","卖家服务市场","卖家培训中心","体检中心","问商友"],
       arr4=["消费者客服","卖家客服"];
var data=[arr0,arr1,arr2,arr3,arr4];


var len=$('.header-r li').children().length;


for(var i=0; i<len; i++){

	if(i==2){ 
	 $('.header-r li').eq(i).hover( function(){ $(this).css("color","red")}, function(){ $(this).css("color","gray") }) 
	}else{
		dropDown($('.header-r li').eq(i), data[i] , '14px',"white","gray","white", "gray","#f3f5f7","white");

	}
}
//----------------------------------------------------------------------------------dropdown下拉菜单特效
//----------------------------------------------------header----------------------------------------------------

//----------------------------------------------------Logo------nav-------------------------------------------------
$(":input") .on("focus",function(){ $(this).attr("placeholder"," ")   });         //搜索条
$('.nav li').hover(function(){charColor($(this),"red") }, function(){ charColor($(this),"white")})
//----------------------------------------------------Logo-------------------------------------------------------

//----------------------------------------------------购物车----------------------------------
function shopCartHover(ele,bgcolorBtn,x,charColor,y){     //购物车按钮滑过特效
bgColor(ele,bgcolorBtn);  
ele.children('img').eq(1).attr("src","素材/icon/"+x+".png");
ele.css("color",charColor );
ele.children('img').eq(0).attr("src","素材/icon/"+y+".png");
}
function cartBoxShow(){
$('.cartBox').show();
}


$('.shopCart').get(0).addEventListener('mouseenter',function(event){ $('.cartBox').show(); shopCartHover($('.shopCart'),"white",24,"red",25); },false) ;
$('.cartBox').get(0).addEventListener('mouseenter',function(event){ $('.cartBox').show(); shopCartHover($('.shopCart'),"white",24,"red",25); },false) ;
$('.cartBox').get(0).addEventListener('mouseleave',function(event){ $('.cartBox').hide(); shopCartHover($('.shopCart'),"red",23,"white",26); },false) ;
$('.shopCart').get(0).addEventListener('mouseleave',function(event){ $('.cartBox').hide(); shopCartHover($('.shopCart'),"red",23,"white",26);},false) ;

$('.cartBox-inner-1').hover( function(){ bgColor($(this),"lightgray")}, function(){ bgColor($(this),"white") })
$('.cartBox-inner-1-title .active').hover(function(){ charColor($(this),"red") }, function(){  charColor($(this),"gray")})
$('.closeBtn').hover(function(){ charColor($(this),"red") }, function(){  charColor($(this),"gray")})
$('.closeBtn').click(function(){ $(this).parent().remove(); })
//----------------------------------------------------购物车----------------------------------
//----------------------------------------------------弹出层-------------------------------------------------------
function popShow(){                  //显示遮罩及弹出层
   $('.pop').show();
   redlineShow();
   popHeight(420);
   $('.pop-close-btn').click(function(){ popHide() }); 
   $('.pop-1-3').append($('#login-content').html() ); 
   $("input") .on("focus",function(){ $(this).attr("placeholder"," ") });
   $( '#popLoginBtn' ).click(function(){  $('.pop-1-3').children().remove();  $('.pop-1-3').append($('#login-content').html());  popHeight(420); $("input") .on("focus",function(){ $(this).attr("placeholder"," ")   });   });
   $( '#popRegiBtn' ).click(function(){ $('.pop-1-3').children().remove();  $('.pop-1-3').append($('#regi-content').html());  popHeight(390); $("input") .on("focus",function(){ $(this).attr("placeholder"," ")   });    })

}
function popHide(){                    //隐藏弹出框
   $('.pop').hide();
   $('.mask').hide();
   $('.pop-1-3').children().remove();
}
function popHeight(height){
  $('.pop').css("height",height)
}
function clearPlaceholder(){
  $(this).attr("placeholder"," ");
}

function redlineShow(){             //控制红下划线
  var redlineLeft=$( '#popLoginBtn' ).position().left,
     redlineWidth=$( '#popLoginBtn' ).width();
  $('.pop-1-2').append('<div id="red-line"></div>') ; 
  $('#red-line').css({ "width": redlineWidth, "height":"3", "margin-left":redlineLeft }) ;
  $( '#popLoginBtn' ).click(function(){   var left=$(this).position().left ;var width=$(this).width();   $('#red-line').css({ "margin-left":left,"width":width });         })
  $( '#popRegiBtn' ).click( function(){    var left=$(this).position().left ;var width=$(this).width();     $('#red-line').css({ "margin-left":left,"width":width });    })
}

function validateEmail(email) {         //验证邮箱是否合法的函数  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

verifyUserLogin=function(value,ele){           //验证用户名的函数, 必须把"方法名"写在前面,否则会报错!!!
     if(value==""){
      ele.text("用户名不能为空!") ; 
     }else{        
        if(isNaN(value)){
                if(validateEmail(value)){ ele.text("邮箱正确!") }else{  ele.text("邮箱不正确!");  }
  }else{
                 if(value.length!=11){ ele.text("请输入11位手机号!") ; }else{ ele.text("输入正确")}
  }
     }
}
verifyPwd=function(value,ele){     //验证密码
 var len=value.length;
 if(len>=6 && len<=16 && value!="" ){ ele.text("密码正确!")}else{ ele.text("密码错误!")}
}
Code=function(value,ele){    //验证图片码
  if(value=="GYYD"){ ele.text("验证码输入正确!")}else{ ele.text("验证码输入错误!")}
}


$('.header-l li').eq(0).click(function(){  $('.mask').show();  popShow();   });     //点击"亲请登录"出现弹出层
$('.pop-1-4 div img').hover(function(){ bgColor($(this),"green") }, function(){ bgColor($(this),"gray")})   //滑过点击微信等图标变绿色

                              
//----------------------------------------------------弹出层-------------------------------------------------------
//------------------------------------------------------------------------------------------banner-------------------------------------------------------------------------------
//-------------------------------banner左侧------------------------------


function stringToArray(string){                                //将大段字符串转化成数组的函数
      var obj=string.split(" ");
      return obj;
}

function fillTitle(title){
   var arrayT=stringToArray(title);
      for(var i=0; i<8; i++){                     //每页有8组数据
          $('.display-title b').eq(i).text(arrayT[i]); 
    }
}                        
  
function fillContent(content){               
    var arrayC=stringToArray(content);
    for(var i=0; i<86; i++){                    //每页共有86个a标签
          $('.display-content a').eq(i).text(arrayC[i]);
    }
       
}
var enter1=0, enter2=0, leave1=0, leave2=0;
//-----------------------------------------------轮播图左侧菜单栏特效----------------------------------------
function titleChange(ele,bgColor, chColor){
   ele.css({"background-color":bgColor, "color":chColor}).siblings().css({"background-color":"rgb(240,20,20)", "color":"white"})
}
function bannerDisplayShow(index){
$('#banner-display').show();
var obj=$('#banner-topics .sub-title').eq(index);
$('#banner-display').hover( function(){ $('#banner-display').show();  titleChange(obj,"white", "red") }, function(){ $('#banner-display').hide();  titleChange(obj,"rgb(240,20,20)", "white") })
}

$('#banner-topics .sub-title').hover(function(){ 
titleChange($(this),"white","rgb(240,20,20)")
 var index=$(this).index();
fillTitle( titleArr[index] );
fillContent( contArr[index] ); 
bannerDisplayShow(index);
}, 
function(){
$('#banner-display').hide();
$(this).css({"background-color":"rgb(240,20,20)","color":"white"})
 })
//-----------------------------------------------轮播图左侧菜单栏特效-----------------------------------------

//-------------------------------banner左侧------------------------------
//----------------------------------------------------轮播图-------------------------------------------------------
         var n=0,
         len=$('.banner-slide').size() ;


      function sliderForward(){                        //banner图前进
      n=n+1;
      if(n==len){ n=0}  
    $('.banner-slide').removeClass('slide-active');
    $('.dott').removeClass('active');

    $('.dott').eq(n).addClass('active');
    $('.banner-slide').eq(n).addClass('slide-active');

         }

     function sliderBackward(){                        //banner图后退

               $('.banner-slide').removeClass('slide-active');
    $('.dott').removeClass('active');

    $('.dott').eq(n).addClass('active');
    $('.banner-slide').eq(n).addClass('slide-active');
          n=n-1;
         if(n==(-1)) { n=4}
     }




    var timer=setInterval( sliderForward,2000);     //Timer
  
  $('.banner').mouseenter( function(){ clearTimeout(timer) }).mouseleave(function(){ timer=setInterval( sliderForward,2000) });   //鼠标进入和离开banner
     
    $('.nextButton').click(sliderForward);              //点击箭头按钮前进

    $('.prevButton').click(sliderBackward);           //点击箭头按钮后退

    $('.dott').on('click',function(event){                 //圆点被点击后banner显示相应的图片
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      n=$(this).index();
      $('.banner-slide').removeClass('slide-active');
      $('.banner-slide').eq(n).addClass('slide-active');
    })
//----------------------------------------------------轮播图-------------------------------------------------------
//-------------------------------banner右侧------------------------------
$('.shake div').hover(function(){  $(this).shake(2, 5, 300); } )

jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {          //图片抖动特效
    this.each(function () {
        var jqNode = $(this);
        jqNode.css({ position: 'relative' });
        for (var x = 1; x <= intShakes; x++) {
            jqNode.animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))
            .animate({ left: intDistance }, ((intDuration / intShakes) / 2))
            .animate({ left: 0 }, (((intDuration / intShakes) / 4)));
        }
    });
    return this;
}
//$('.banner-right-2-1 div,.banner-right-2-2 div,.banner-right-2-3 div').shake(3, 5, 400);   //$("抖动元素").shake(次数, 距离, 持续时间);


//-------------------------------banner右侧------------------------------
//------------------------------------------------------------------------------------------banner-------------------------------------------------------------------------------
//----------------------------------------------------floor-------------------------------------------------------

function flrArrowPosition(ele,id){                   //设置floor-arrow的left坐标的函数
     var left=( ele.position().left  + ele.width()/2 );
     var arrow=document.getElementById(id).getElementsByClassName("floor-arrow")[0];
     var $obj = $(arrow);
     $obj.css("left",left); 
     ele.siblings().css("color","gray");
     ele.css("color","red");
}

function fillFlrContent(ele,id,folder1,folder2,folder3,flrNum){   //填充每个楼层图片及内容的函数
    var f;
    if(flrNum==1){ f =f1}; 
    if(flrNum==2){ f =f2}; 
    if(flrNum==3){ f =f3}; 
    if(flrNum==4){ f =f4}; 
    if(flrNum==5){ f =f5}; 
     var obj=document.getElementById(id);
     var $parent =$(obj);
     var x=ele.index();
     if(x==0){
          for(var i=0; i<12; i++){
                     $parent.find('.flr-price').eq(i).text( f[0][i].price ); 
                     $parent.find('.flr-title').eq(i).text( f[0][i].title );
                     $parent.find('.floor-content div img').eq(i).attr("src","素材/floor/"+folder1+"/"+f[0][i].src)              
          }
     }

     if(x==2){
          for(var i=0; i<12; i++){
                $parent.find('.flr-price').eq(i).text( f[1][i].price ); 
                $parent.find('.flr-title').eq(i).text( f[1][i].title );
                $parent.find('.floor-content div img').eq(i).attr("src","素材/floor/"+folder2+"/"+f[1][i].src)
                
          }
     }
      
     if(x==4){
             for(var i=0; i<12; i++){
                    $parent.find('.flr-price').eq(i).text( f[2].price );
                    $parent.find('.flr-title').eq(i).text( f[2].title );
                    $parent.find('.floor-content div img').eq(i).attr("src","素材/floor/"+folder3+"/"+f[2][i].src)
                    
             }
     }

}

$(document).ready(function(){         //页面加载时,对各楼层内容的填充
   var len=$('.floor-arrow').size();
   $('.floor-title-2-1').css("color","red")
    $('.floor-title-2-1').css("color")
        for(var i=0; i<len; i++){
                var left=( $('.floor-title-2-1').eq(i).position().left  + $('.floor-title-2-1').eq(i).width()/2 );
                $('.floor-arrow').eq(i).css("left",left); 
                for(var j=0; j<12; j++){                   
                    if(i==0){
                     $('.floor-content').eq(i).find("img").eq(j).attr("src","素材/floor/f1a/"+f1[0][j].src);
                     $('.floor-content').eq(i).find(".flr-title").eq(j).text( f1[0][j].title);
                     $('.floor-content').eq(i).find(".flr-price").eq(j).text( f1[0][j].price);
                    }
                    if(i==1){
                     $('.floor-content').eq(i).find("img").eq(j).attr("src","素材/floor/f2a/"+f2[0][j].src);
                     $('.floor-content').eq(i).find(".flr-title").eq(j).text( f2[0][j].title);
                     $('.floor-content').eq(i).find(".flr-price").eq(j).text( f2[0][j].price);
                    } 
                    if(i==2){
                     $('.floor-content').eq(i).find("img").eq(j).attr("src","素材/floor/f3a/"+f3[0][j].src);
                     $('.floor-content').eq(i).find(".flr-title").eq(j).text( f3[0][j].title);
                     $('.floor-content').eq(i).find(".flr-price").eq(j).text( f3[0][j].price);
                    }
                    if(i==3){
                     $('.floor-content').eq(i).find("img").eq(j).attr("src","素材/floor/f4a/"+f4[0][j].src);
                     $('.floor-content').eq(i).find(".flr-title").eq(j).text( f4[0][j].title);
                     $('.floor-content').eq(i).find(".flr-price").eq(j).text( f4[0][j].price);
                    }
                    if(i==4){
                     $('.floor-content').eq(i).find("img").eq(j).attr("src","素材/floor/f5a/"+f5[0][j].src);
                     $('.floor-content').eq(i).find(".flr-title").eq(j).text( f5[0][j].title);
                     $('.floor-content').eq(i).find(".flr-price").eq(j).text( f5[0][j].price);
                    }
                 }

    
        }
      
});

$('#floor1 .floor-title-2-1, #floor1 .floor-title-2-2,#floor1 .floor-title-2-3').on("click", function(event){             //F1楼层绑定click事件  
flrArrowPosition($(this),"floor1"); fillFlrContent($(this),"floor1","f1a","f1b","f1c",1) 
})           

$('#floor2 .floor-title-2-1, #floor2 .floor-title-2-2,#floor2 .floor-title-2-3').on("click", function(event){              //F2楼层绑定click事件  
flrArrowPosition($(this),"floor2"); fillFlrContent($(this),"floor2","f2a","f2b","f2c",2) 
})

$('#floor3 .floor-title-2-1, #floor3 .floor-title-2-2,#floor3 .floor-title-2-3').on("click", function(event){              //F3楼层绑定click事件  
flrArrowPosition($(this),"floor3"); fillFlrContent($(this),"floor3","f3a","f3b","f3c",3) 
})
$('#floor4 .floor-title-2-1, #floor4 .floor-title-2-2,#floor4 .floor-title-2-3').on("click", function(event){              //F4楼层绑定click事件  
flrArrowPosition($(this),"floor4"); fillFlrContent($(this),"floor4","f4a","f4b","f4c",4) 
})

$('#floor5 .floor-title-2-1, #floor5 .floor-title-2-2,#floor5 .floor-title-2-3').on("click", function(event){              //F5楼层绑定click事件  
flrArrowPosition($(this),"floor5"); fillFlrContent($(this),"floor5","f5a","f5b","f5c",5) 
})

$('.floor-content div p').hover(function(){ charColor($(this),"red") }, function(){ charColor($(this),"gray") })
$('.floor-content div').hover(function(){ $(this).css("border","1px solid lightgray")}, function(){ $(this).css("border","") })

//----------------------------------------------------floor-------------------------------------------------------
//------------------------------------楼层坐标按钮特效-----------------------------------

window.addEventListener("scroll",function(){  if($('html').scrollTop()>=300){   $('.flrNav').show()  }else{ $('.flrNav').hide() }        } )
var flrTitle=["服装","美妆","手机","家电","食品"]; 
var flrNum=["F1","F2","F3","F4","F5"]
$('.flrNav a').hover(function(){  var n=$(this).index();  $(this).text( flrTitle[n])  }, function(){   var x=$(this).index();  $(this).text( flrNum[x] )     })

var w=$('html').height();
console.log(w)

//------------------------------------楼层坐标按钮特效-----------------------------------

//------------------------------------------------------右侧边服务区按钮---------------------------------------------------
$('.service a').hover(function(){ 
 bgColor($(this),"gray"); 
 var n=$(this).index();
 $('.service-subLink div').eq(n).show() },

  function(){
    bgColor($(this),"lightgray"); 
    var x=$(this).index();
    $('.service-subLink div').eq(x).hide();
  }


 )
//------------------------------------------------------右侧边服务区按钮---------------------------------------------------
$('.about div span').hover(function(){ $(this).css("color","red") }, function(){  $(this).css("color","gray")  })

































































































