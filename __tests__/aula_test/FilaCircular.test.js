import FilaCircular from "../../src/aula/FilaCircular";

let fc;

beforeEach(() => {
    fc = new FilaCircular(5);
})

it("1) testando se a pilha inicia vazia e se o constructor original funciona", () =>{
    expect(fc.isEmpty()).toBe(true);
    expect(fc.length()).toBe(0);

    let fConstructor = new FilaCircular();
    expect(fConstructor.tam).toBe(5);
})

it("2) inserção de dado e verificar o topo da fila", () =>{
    fc.enqueue(4);
    fc.enqueue(5);
    fc.enqueue(6);
    expect(fc.length()).toBe(3);
    expect(fc.isEmpty()).toBe(false);
    expect(fc.front()).toBe(4);

    fc.dequeue();
    expect(fc.length()).toBe(2);
    expect(fc.isEmpty()).toBe(false);
    expect(fc.front()).toBe(5);

})

it("3) Testando o limite da fila e forçando ela gerar um erro", () =>{
    fc.enqueue("A");//0 indice
    fc.enqueue("B");//1 indice
    fc.enqueue("C");//2 indice
    fc.enqueue("D");//3 indice
    fc.enqueue("E");//4 indice

    expect(() => fc.enqueue("F").toThrow("QueueOverFlow"));

    //Agora será dado um dequeue (que é a remoção) para liberar espaço e a fila vai modificar seu valores de indice e elementos
    //porém ela não contabilizou esse ultimo elemento F, porque se não iria extrapolar o tamanho e por isso que se lança um erro
    //ou seja, a partir de agora a fila vai começar a dar a volta circular, ou se caso quiser chamar de "wrap-around (volta circular)"
    
    // Dequeue para abrir espaço (agora length = 4, inicio = 1, fim = 5)
    fc.dequeue();
    expect(fc.length()).toBe(4);

    //com a remoção feita no codigo anterior(que mecheu com o atributo inicio), agora vamos adicionar um novo elemento e isso vai
    // movimentar o atributo fim, fazendo ele voltar para o indice "0" do vetor e assim ser possivel inserir um novo elemento 
    fc.enqueue("F");
    expect(fc.isEmpty()).toBe(false);
    expect(fc.front()).toBe("B");
    expect(fc.length()).toBe(5);
    expect(fc.isFull()).toBe(true);

    //agora vamos fazer todos esses passos a passo anteriores, só que de uma vez só!
    fc.dequeue()//inicio 2
    fc.enqueue(2)//fim 1
    fc.dequeue()//inicio 3
    fc.enqueue(3)//fim 2
    fc.dequeue()//inicio 4
    fc.enqueue(4)//fim 3
    fc.dequeue()//inicio 0(zero)
    fc.enqueue(5)//fim 4 

    //ai agora é que vamos inserir o ultimo valor de volta para a casa do indice zero, que é onde está o inicio
    //fc.enqueue(6); 
    
    expect(fc.isFull()).toBe(true);
    expect(fc.front()).toBe("F")//ou 6, a não tenho mais certeza
    expect(fc.length()).toBe(5)
})

it("4) testando exceção de erros de Underflows, com pilha vazia", () =>{
    expect(() => fc.front()).toThrow("QueueUnderFlow");
    expect(() => fc.dequeue()).toThrow("QueueUnderFlow");
})

it("Testando clear()", () => {
    fc.enqueue(1);
    fc.enqueue(2);
    fc.clear();
    expect(fc.isEmpty()).toBe(true);
    expect(fc.length()).toBe(0);
});