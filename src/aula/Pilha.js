class Pilha{
    constructor(capacidade = 5){
        this.capacidade = capacidade;
        this.topo = 0;
        this.dados = [];
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow");
        }
        this.topo = this.topo - 1;
    }

    push(key){
        if(this.isFull()){
            throw new Error("Stack overflow");
        }
        this.dados[this.topo++] = key; 
    }

    isEmpty(){
        return this.topo === 0;
    }

    top(){
        return this.dados[this.topo - 1];
    }

    length(){
        return this.topo;
    }

    isFull(){
        return this.length() === this.capacidade;
    }

    clear(){
        this.topo = 0; 
    }

}

export default Pilha; 