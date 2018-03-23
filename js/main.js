$(document).ready(function(){
   subNav_mobile();
   // mainSlide_width();
   slide();
})

$(window).resize(function(){
   subNav_mobile();
   slide();
})

//subNav 배치
var subNav_mobile = function(){
   var width = $('.gnb_innerWrapper').width(); //헤더넓이값
   // console.log('width: ' + width);
   var padding_left = 25;
   // console.log('padding_left: ' + padding_left);
   var padding = 45; //padding-left: 25, padding-right: 20
   // console.log('padding: ' + padding);
   var margin = $('.gnb_innerWrapper').outerWidth(true)- padding - width;
   // console.log('margin: ' + margin);
   var margin_left = margin/2;
   // console.log('margin_left: ' + margin_left);
   var subNav_mobile = padding_left + margin_left;
   // console.log('subNav_mobile: ' + subNav_mobile);

   // 1.모바일 subNav_mobile
   $('.subNav_mobile').css({'margin-left':-(subNav_mobile)});

   // 2.TV subNav_TV
   var subNav_TV = subNav_mobile + 56;
   $('.subNav_TV').css({'margin-left':-(subNav_TV)})

   // 3.가전 subNav_appliances
   var subNav_appliances = subNav_TV + 42;
   $('.subNav_appliances').css({'margin-left':-(subNav_appliances)})

   // 4.IT subNav_IT
   var subNav_IT = subNav_appliances + 52;
   $('.subNav_IT').css({'margin-left':-(subNav_IT)})

   // 5.사운드 subNav_sound
   var subNav_sound = subNav_IT + 36;
   $('.subNav_sound').css({'margin-left':-(subNav_sound)})


   //6.이벤트 subNav_event
   var subNav_event = subNav_sound + 52;
   $('.subNav_event').css({'margin-left':-(subNav_event)})

   // 4.큐레이션샵 subNav_curation_shop
   var subNav_curation_shop = subNav_event + 66;
   $('.subNav_curation_shop').css({'margin-left':-(subNav_curation_shop)})
}

var slide = function(){
   //메인슬라이드 width값
   var window_width = $(window).innerWidth();

      $('#show').css({'width': window_width});
      $('.totalWidth').css({'width': window_width * 6})
      $('.totalWidth>li').css({'width': window_width});
      // $('.totalWdith>li>img').css({'width': window_width});

   //이미지 갯수
   var total = $('.totalWidth>li').length;
   var num = 0;

   var slide = function(){
      //복제하는 변수
      var copyObj = $('.totalWidth>li:lt(1)').clone();
      //copy한 이미지 붙여넣기
      $('.totalWidth').append(copyObj);

      if(num == total){
         num = 0;
         $('.totalWidth>li').css({'margin-left': 0});
      }
      num++;
      $('.totalWidth>li').animate({marginLeft : -window_width * num});
      return false;
   }

}
