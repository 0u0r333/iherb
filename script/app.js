$(function(){
     //공지 슬라이드
        let slide = setInterval(function(){
            $(".noti>ul").delay("3000")
            $(".noti>ul").animate({top:'-100%'},function(){
                $(".noti>ul").append($(".noti>ul>li:eq(0)")).css({top:'0'})
            });
        });



   




});