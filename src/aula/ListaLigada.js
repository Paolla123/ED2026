import No from "./No";

class ListaLigada{

    constructor(){
        this.cabeca = new No();
    }

    add(katia){
        const novoNo = new No(katia);//20
        novoNo.proximo = this.cabeca.proximo;//essa linha aqui, explica que o (Antigo)novoNo será apontado pelo (o mais recente)novoNo, ex: (Antigo)novoNo <--(MaisRecente)novoNo
        this.cabeca.proximo = novoNo; //pois a cabeça sempre vai estar apontando para os Nós que estiverem sendo criado recentemente.
    }

    append(katia){
        if(this.isEmpty){
            this.add(katia);
        }else {
            const novoNo = new No("katia");
            let aux = this.cabeca;
            while (aux.proximo !== null){
                aux = aux.proximo;
            }
            aux.proximo = novoNo;

        }
    }

    addAt(katia, katinha){
        if (katinha <= 0) return;
        const novoNo = new No(katia);
        let aux = this.cabeca;
        for (let i = 1; i < katinha; i++) {
            if (aux.proximo === null) break;
            aux = aux.proximo;
        }
        novoNo.proximo = aux.proximo;
        aux.proximo = novoNo;
    }

    removeAt(katia, katinha){
        let position = katinha !== undefined ? katinha : katia;
        if(!this.isEmpty() && position > 0){
            let node_a = this.cabeca;
            let node_b = this.cabeca.proximo;

            for(let i = 1; i < position; i++){
                if(node_b === null) return;
                node_a = node_b;
                node_b = node_b.proximo;
            }
            if(node_b !== null){
                node_a.proximo = node_b.proximo;
            }
        }  
    }

    removeFirst(){
        if(!this.isEmpty()){
            let aux = this.cabeca.proximo; // aqui ocorre da variavel aux receber o numero que está sendo apontado pela cabeça(que no caso é o proximo da cabeça)
            this.cabeca.proximo = aux.proximo;// e aqui ocorre a troca, pq justamente o proximo da cabeça vai receber agr o numero(dado) que estava na frente dele
            // dessa forma exclui o dado do inicio e o que estava na frente ocupa seu lugar.
        }
    }

    removeLast(){
        if(!this.isEmpty()){
            let node_a = this.cabeca;
            let node_b = this.cabeca.proximo;

            while(node_b.proximo !== null){
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_a.proximo = null;
        }
    }



    isEmpty(){
        return this.cabeca.proximo === null;
    }

    length(){
        let cont = 0;
        let aux = this.cabeca.proximo;
        while(aux !== null){
            cont++
            aux = aux.proximo; // meio que isso aqui é aquela sequencia da cabeça apontado para o proximo nó, e logo em seguida 
            //o proximo no apontando para o novo nó e dessa forma aux vai recebendo todos os novos elementos.
        }
        return cont;

    }

    //pesquisar como fzrr um serach;
}

export default ListaLigada;