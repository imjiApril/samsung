$(document).ready(function(){
   var width = $('.gnb_innerWrapper').width();
   var padding_left = 25;
   var padding = 45;
   var margin = $('.gnb_innerWrapper').outerWidth(true)- padding - width;
   var margin_left = margin/2;
   var so = padding_left + margin_left;

   console.log('so: ' + so);
   console.log('margin: ' + margin);
   console.log('margin_left: ' + margin_left);
   $('.test01').css({'margin-left':-(so)})
})
