$(document).ready(function(){
	adjustWindow = function(out, inside, percentage){
		percentage = percentage/100; 
		let windowWidth = $(out).outerWidth(true),
		divWidth = $(inside).outerWidth(true),
		divPosition = (windowWidth*percentage) - (divWidth*percentage) + 'px';
		$(inside).css({'left':divPosition});
	}

	resize = function(){
		adjustWindow($('body'), $('.content'),50);
		adjustWindow($('.content'), $('.title'),50);
		adjustWindow($('.content'), $('.answerContent'),50);
		adjustWindow($('.answerContent'), $('.answer'),50);
	}

	colors = function(id){
		let r = Math.floor(Math.random()*256),
		g = Math.floor(Math.random()*256),
		b = Math.floor(Math.random()*256);
		$(id).css({'background-color':'rgba('+r+','+g+','+b+',0.5)'});
	}

	resize();
	colors($('.content'));
	colors($('body'));
	colors($('.answerContent'));
	$("body")[0].onresize = function(){resize()};
	
});
