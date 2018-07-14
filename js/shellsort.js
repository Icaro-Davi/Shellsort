class ShellSort{
	constructor(){
		this.array = [];
	}

	show(index){
		return this.array[index];
	}

	arrayLength(){
		return this.array.length-1;
	}

	isEmpty(){
		return this.array.length == 0;
	}
	
	clean(){
		this.array = [];
	}

	addElement(element){
		this.array.push(element);
	}

	order(array = this.array){
		let distance = parseInt(array.length/2); // distance equivale a distancia que vai ser usada para fazer a troca
		while( distance > 0){ 
			let finalIndex = distance; //recebe a distancia 
			while( finalIndex < array.length ){
				let temp = array[finalIndex]; //recebe o valor do meio do vetor
				let swap = false; // condicao de troca
				let initialIndex = finalIndex - distance; // o elemento anterior com quem vou querer comparar com o i
				/*
					Para que nao ocorra o risco do initialIndex ficar negativo e acabar dando erro
					faz a comparação do ininitialIndex com 0. E por fim compara se o array na posição
					initialIndex é maior que a temporaria.
				*/
				while( initialIndex >= 0 && array[initialIndex] > temp){
					array[initialIndex+distance] = array[initialIndex]; // acontece a troca do maior para direita
					swap = true; // conditao de troca para adicionar a esquerda
					initialIndex -= distance; // 
				}
				if(swap){ // realiza a troca
					array[initialIndex+distance] = temp; 
				}
				finalIndex += 1; // pula para o proximo index para fazer a troca
			}
			distance = parseInt(distance/2); // controlador do primeiro while
		}
		this.array = array;
	}
}