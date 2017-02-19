jQuery(function($) {
	$('.main').height($(document).height());
	$('.fon_activ').height($(document).height());

	$('input[name="phone"]').mask("+7 (999) 999-9999");

	$('.li_click').click(function(){
		var grup = $(this).attr('grup');
		$('.li_click[grup="'+grup+'"]').removeClass('li_check');
		if(!$(this).hasClass('li_check')){
			$(this).addClass('li_check');
		}
		$(this).parent('ul').next().attr('check', '1');
		$('.result span').text(grup*2000+'р');
		$('.informa').slideDown('slow');
	});

	$('#start').click(function(){
		$('.fon').height($(document).height());
		$('.fon').addClass('fon_activ');
		$('.enter').hide();
		$('.for_form').show();
		$('.test').fadeIn(300);	
		return false;	
	});

	$('.steping').click(function(){
		if($(this).attr('check') == 1){
			$(this).parent().hide();
			$('#'+$(this).attr('to')).fadeIn(300);
		}
		return false;	
	});
});
	