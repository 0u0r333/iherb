$(function(){

   let shopBtn = document.querySelector(".shop");
   let brandBtn = document.querySelector(".brand");
   let careBtn = document.querySelector(".care");
   let menuBtn = document.querySelector(".i_box>.menu");

   let shop = document.querySelector("#shop");
   let brand = document.querySelector("#brand");
   let care = document.querySelector("#care");
   let menu = document.querySelector("#mainmenu");

   console.log(menuBtn, menu)

   shopBtn.addEventListener('click', toggleMenu1);
   brandBtn.addEventListener('click', toggleMenu2);
   careBtn.addEventListener('click', toggleMenu3);
   menuBtn.addEventListener('click', toggleMenu4);

   function toggleMenu1(){
    if(shop.style.display === 'none' || shop.style.display === ''){
        shop.style.display = 'block';
    }else{
        shop.style.display = 'none' ;
    }
   }
   function toggleMenu2(){
    if(brand.style.display === 'none' || brand.style.display === ''){
        brand.style.display = 'block';
    }else{
        brand.style.display = 'none' ;
    }
   }
   function toggleMenu3(){
    if(care.style.display === 'none' || care.style.display === ''){
        care.style.display = 'block';
    }else{
        care.style.display = 'none' ;
    }
   }
   function toggleMenu4(){
    if(menu.style.display === 'none' || menu.style.display === ''){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none' ;
    }
   }





});