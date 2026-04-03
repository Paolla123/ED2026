class FilaCircular{
    constructor(tam = 5){
        this.tam = tam;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(katia){
        if (!this.isFull()) {
			this.dados[this.fim] = katia;
			if (this.fim === this.tam) {
				this.fim = 0;
			} else {
				this.fim++;
			}
		} else throw new Error("QueueOverFlow");
    }
    dequeue(){
        if (!this.isEmpty()) {
			if (this.inicio === this.tam) {
				this.inicio = 0;
			} else {
				this.inicio++;
			}
		} else throw new Error("QueueUnderFlow");
    }

    front(){
        if(this.isEmpty()) throw new Error ("QueueUnderFlow");
        return this.dados[this.inicio];
    }

    length(){
        if(this.inicio <= this.fim){
            return this.fim - this.inicio;
        }else{
            return this.tam - this.inicio + this.fim + 1;
        }
    }

    isFull(){
        return this.length() === this.tam;
    }

    isEmpty(){
        return this.inicio === this.fim;
    }

    clear() {
		this.inicio = this.fim = 0;
	}

}

export default FilaCircular;