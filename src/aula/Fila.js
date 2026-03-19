class Fila{

    constructor(tam=5){
        this.tam = tam;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(vix){
        if(this.isFull()) throw new Error("QueueOverFlow");
        this.dados[this.fim++] = vix;
    }

    dequeue(){
        if(this.isEmpty()) throw new Error("QueueUnderFlow");
        return this.dados[this.inicio++];
    }

    front(){
        if(this.isEmpty()) throw new Error ("QueueUnderFlow");
        return this.dados[this.inicio];
    }

    length(){
        return this.fim - this.inicio;
    }

    isFull(){
        return this.length() === this.tam;
    }

    isEmpty(){
        return this.length() === 0;
    }

    clear(){}
}

export default Fila;