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

//-------------------------防止点击冒泡-------------------------------
$('window').on("click",function(){
      return false;
})


//-------------------登录部分----------------------
var html=$('#add-items').html();



$('.box .caption div:nth-child(1)').on("click",function(){                 //"Login"被按中时
           $(this).addClass("focus").siblings().removeClass("focus");
           $('.box .account .login input').val("Login");
    
           $('.box .account #EnterAgain').hide();
           $('.box .account .confirm').hide();
            
           $('.box .account .select').show();
           $('.box .account .otherLogin').show();

          $('.box .account .otherLogin').find("add").remove()

          return false;

})




$('.box .caption div:nth-child(2)').on("click",function(){                 //"Register"被按中时
           $(this).addClass("focus").siblings().removeClass("focus");
           $('.box .account .login input').val("Register");
         
           $('box .account #EnterAgain').show();
           $('.box .account .confirm').show();

           $('.box .account .select').hide();
           $('.box .account .otherLogin').hide();
           
           //------------------------设置提交按钮:  $('.box .account .login input') 距离----------------------
          
           $('.box .account .login input').css({ "position":"absolute","bottom": "0" });

            $('.box .account .otherLogin .item + .item').addClass("add");

            return false;

              
})

           

$('.box .account .otherLogin .item #more').on("click",function(){               //小方块"more" 按下时
             $('.box .account .otherLogin .item + .item').toggleClass("add");        
             return false;  

})

//".box #backBtn" back按钮按下时 跳转前一页

$('.box #backBtn').on("click",function(){
             window.history.go(-1);

})

