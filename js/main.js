//Adaptive functions 
$(window).resize(function(event){
	adaptive_function();
});

function adaptive_header(w,h){
	let headerMenu = $('.header-menu');
	let headerLang = $('.header-top-lang');
	if (w < 767){
		if (!headerLang.hasClass('done')) {
			headerLang.addClass('done').appendTo(headerMenu);
		}
		if(!$('.header-bottom-menu').hasClass('done')){
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	} else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
		$.each($('.header-bottom-menu'), function(index, val){
			if($(this).hasClass('header-bottom-menu--right')){
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			} else if( $(this).hasClass('done')){
				$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
			}
		});
	}
	
};

function adaptive_function(){
	let w = $(window).outerWidth();
	let h = $(window).outerHeight();
	adaptive_header(w,h);
};
adaptive_function();

$('.header-menu__icon').click(function(event){
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

function ibg(){
	$.each($('.ibg'), function(index, val){
		if($(this).find('img').length>0){
			$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();