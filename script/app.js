$(function(){
    //마우스 오버시 메뉴 페이드효과
    $(".shop,#shop").on({
        mouseover:function(){
            $("#shop").stop().fadeIn();
        },
        mouseout:function(){
            $("#shop").stop().fadeOut();
        },
    });


    $(".brand,#brand").on({
        mouseover:function(){
            $("#brand").stop().fadeIn();
        },
        mouseout:function(){
            $("#brand").stop().fadeOut();
        },
    });

    $(".care,#care").on({
        mouseover:function(){
            $("#care").stop().fadeIn();
        },
        mouseout:function(){
            $("#care").stop().fadeOut();
        },
    });


    $(".i_box>.menu,#mainmenu>.bg").on({
        mouseover:function(){
            $("#mainmenu").stop().fadeIn();
        },
        mouseout:function(){
           $("#mainmenu").stop().fadeOut();
        },
    });


     //공지 슬라이드
        let slide = setInterval(function(){
            $(".noti>ul").delay("3000")
            $(".noti>ul").animate({top:'-100%'},function(){
                $(".noti>ul").append($(".noti>ul>li:eq(0)")).css({top:'0'})
            });
        });



   




});