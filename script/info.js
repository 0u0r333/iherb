$(function(){
    //서브이미지 누르면 메인이미지 변경
    $(".imgbox .sub2").click(function(){
        $(".mainimg figure").stop().css({opacity:'0'});
        $(".mainimg .m2").stop().css({opacity:'1'});
    });
    $(".imgbox .sub3").click(function(){
        $(".mainimg figure").stop().css({opacity:'0'});
        $(".mainimg .m3").stop().css({opacity:'1'});
    });
    $(".imgbox .sub4").click(function(){
        $(".mainimg figure").stop().css({opacity:'0'});
        $(".mainimg .m4").stop().css({opacity:'1'});
    });
    $(".imgbox .sub1").click(function(){
        $(".mainimg figure").stop().css({opacity:'0'});
        $(".mainimg .m1").stop().css({opacity:'1'});
    });
  

    //수량조정시 수량 변경되게
    //total에 총 금액(갯수) 표시되게
   const minus = document.querySelector(".minus")
   const plus = document.querySelector(".plus")
   const display = document.querySelector(".result")
   const total = document.querySelector(".totalcost")
   
   let qty = 0;
   minus.addEventListener('click',(event)=>{
     if(qty > 1 ){
           qty -= 1;
       }else{
           qty=1;
       }
   
       display.innerHTML = `<p class=result">${qty}</p>`
       total.innerHTML = `<p class="totalcost">₩${(qty * 8310).toLocaleString()}</p>`
   });
   
   plus.addEventListener('click',(event)=>{
       qty = qty+1;
   
       display.innerHTML = `<p class="result">${qty}</p>`
       total.innerHTML = `<p class="totalcost">₩${(qty * 8310).toLocaleString()}</p>`
   })
   
   
    //하트 누르면 껏다 켜지기
    $('.heart').click(function () {
        // 'heart1'과 'heart2' 클래스를 토글
        $('.heart1, .heart2').toggleClass('heart1 heart2');
    });
 


    //구매창 아래 작은 베너 슬라이드
    let noti = setInterval(function(){
        $(".note>ul").delay("3000")
        $(".note>ul").animate({top:'-100%'},function(){
            $(".note>ul").append($(".note>ul>li:eq(0)")).css({top:'0'})
        });
    });




    //후기 화살표 슬라이드
    const rev_con=document.querySelector('.rev_con');
    const revbox=document.querySelectorAll('.revbox');
    const btn_left=document.querySelector('.btn_left');
    const btn_right=document.querySelector('.btn_right');
    let current_idx=0;

    function goto_slide(idx){
        rev_con.style.left=idx * -100 + '%'
        rev_con.style.transition='1s';
        current_idx=idx;
    }

    btn_right.addEventListener('click',function(){
        if(current_idx<revbox.length-1){
            goto_slide(current_idx+1)
        }
        if(current_idx > 2){
            goto_slide(2)
        }
    });

    btn_left.addEventListener('click',function(){
        if(current_idx>0){
            goto_slide(current_idx-1)
        }
    });






    //버튼 누르면 상품설명-고객후기-qna 글씨 색 변경 + 페이지나오기
    $(".btn2").click(function(){
        $(".btn2").css({color:'#333'});
        $(".btn1").css({color:'#bababa'});
        $(".btn3").css({color:'#bababa'});
        $(".con2").css({opacity:'1'});
        $(".con1").css({opacity:'0'});
        $(".con3").css({opacity:'0'});
    });

    $(".btn3").click(function(){
        $(".btn3").css({color:'#333'});
        $(".btn1").css({color:'#bababa'});
        $(".btn2").css({color:'#bababa'});
        $(".con3").css({opacity:'1'});
        $(".con1").css({opacity:'0'});
        $(".con2").css({opacity:'0'});
    });
    
    $(".btn1").click(function(){
        $(".btn1").css({color:'#333'});
        $(".btn2").css({color:'#bababa'});
        $(".btn3").css({color:'#bababa'});
        $(".con1").css({opacity:'1'});
        $(".con2").css({opacity:'0'});
        $(".con3").css({opacity:'0'});
    });




});