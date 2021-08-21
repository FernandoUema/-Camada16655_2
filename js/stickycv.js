$(window).scroll(function(){
 	var a = $(window).scrollTop();
   var pos = $('.header').height();
    var b = $('.wrap').offset().top - pos;
   var m =  $('.sticky-div').outerHeight() + $('.header').outerHeight();
  var fixtop = $('.header').outerHeight();
    var y = $('.ftr-div').offset().top - m;
        if (a > b) {
        $('.sticky-div').addClass('fixed').css({'top':fixtop + 'px'})
        $('.wrap').height($('.sticky-div').outerHeight());     
            } 
        else {
        $('.sticky-div').removeClass('fixed')
        $('.wrap').height(0);
          }  
    if (a > y) {
        $('.sticky-div').addClass('footstick');
         $('.wrap').height($('.sticky-div').outerHeight());

     }
     else{
        $('.sticky-div').removeClass('footstick');
    }
});