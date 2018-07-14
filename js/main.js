var shellsort = new ShellSort();

$(document).ready(function(){
	$('#insert').click(insert);
	$('#order').click(order);
	$('#clean').click(clean);
});

function showInWindow(){
	let val = shellsort.show();
	$('.answerContent').empty();
	for(let index = 0; shellsort.arrayLength() >= index; index++){
		$('.answerContent').append('<div class="answer">'+shellsort.show(index)+'</div>');
	}
}

function order(){
	if(shellsort.isEmpty())  return alert("Lista Vazia");
	shellsort.order();
	showInWindow();
	resize();
}

function insert(){
	let element = parseInt(prompt('Digite um valor para ser inserido.'));
	shellsort.addElement(element);
	showInWindow();
	resize();
}

function clean(){
	shellsort.clean();
	showInWindow();
	colors($('.answerContent'));
}