$(function () {
    $(window).resize(function () {
        var clientW=$(window).width();
        if (clientW<730){
            $(".header1").css({display:"none"});
            $(".header2").css({display:"block"});
            $(".yi .text-list").css({display:"none"});
            $(".yi h1").css({display:"block",borderBottom:"1px solid #ccc"});
            $(".yi h1").on("click",function(){
                $(this).next(".text-list").finish().slideToggle();
            });
            
        }else if (clientW>730){
            $(".header1").css({display:"block"});
            $(".header2").css({display:"none"});
            $(".yi .text-list").css({display:"block"});
            $(".yi h1").css({display:"block",borderBottom:"0"});
            $(".yi h1").off();
        }
    });
    $(window).resize();
    $(".left").click(function(){
        $(".header3").finish().slideToggle();
    })

//    轮播

    var t=setInterval(move,2000);
    var num=0;
    function move(){
        num++;
        if(num==$(".banner-img").length-1){
            $(".box").finish().animate({marginLeft:-num*100+"%"},function(){
                $(".box").css({marginLeft:0});
            });
            $(".lists li").removeClass("hot").eq(num).addClass("hot");
            num=0;
            $(".lists li").eq(0).addClass("hot");
        }else{
            $(".box").finish().animate({marginLeft:-num*100+"%"});
            $(".lists li").removeClass("hot").eq(num).addClass("hot");
        }
    }
//     单击按钮
    $(".lists li").click(function(){
        var index=$(this).index(".lists li");
        num=index;
        $(".lists li").removeClass("hot").eq(index).addClass("hot");
        $(".box").finish().animate({marginLeft:-num*100+"%"});

    })
    $(".banner").hover(function () {
        clearInterval(t);
    }, function () {
        t=setInterval(move,2000);
    });



    var margin;

    touch.on(".box","dragstart", function () {
        margin=$(".box")[0].offsetLeft; 
    });


    touch.on(".box","drag", function (e) {
        $(".box").css({"margin-left":margin+e.x});
    });

    touch.on(".box","dragend", function (e) {
        if (Math.abs(e.x)>300|| e.factor<5){
            if (e.direction=="left"){ 
                num++;
                if(num==$(".banner-img").length-1){
                    $(".box").finish().animate({marginLeft:-num*100+"%"});
                    $(".box").css({marginLeft:-num*100+"%"});
                    $(".lists li").removeClass("hot").eq(num).addClass("hot");
                    num=0;
                }else{
                    $(".box").finish().animate({marginLeft:-num*100+"%"});
                    $(".lists li").removeClass("hot").eq(num).addClass("hot");
                }
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                    $(".box").animate({marginLeft:-num*100+"%"});
                    $(".lists li").removeClass("hot").eq(num).addClass("hot");
                    return; 
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                    $(".lists li").removeClass("hot").eq(num).addClass("hot");
                }
            }
        }else {
            $(".box").animate({marginLeft:-num*100+"%"});
            $(".lists li").removeClass("hot").eq(num).addClass("hot");
        }
    });
    $(".box").mousedown(function (e) {
        e.preventDefault();
    });

});