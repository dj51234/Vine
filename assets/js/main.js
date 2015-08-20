$(document).ready(function() {
	$('.ion-navicon').on('click',function(){
		$('.nav-side-wrap').toggleClass('open');
		return false;
	});

	$('.face').mouseenter(function(){
		$(this).siblings('.info').children('p').css({'opacity':'1','transform':'rotate(0deg)'});
	});
	$('.face').mouseleave(function(){
		$(this).siblings('.info').children('p').css({'opacity':'0','transform':'rotate(25deg)'});;
	});
});
