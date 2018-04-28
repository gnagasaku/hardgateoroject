//画像フェード表示
$(function() {
	$('.img-mv01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv01');
		}
		else{
			$(this).stop().removeClass('mv01');
		}
	});
});

//smooth scroll
$(function() {
   $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(function(){
	var agent = navigator.userAgent,ua = '';
	if(agent.search(/iP/) != -1){
		ua = 'ios'
	}else if(agent.search(/Android/) != -1){
		ua = 'android'
	}else{
		ua = 'android'
	}
	if(ua) document.querySelector('body').setAttribute('class',ua)
});

