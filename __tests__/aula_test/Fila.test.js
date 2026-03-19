import Fila from "../../src/aula/Fila";

let f;

beforeEach( ()=> {
    f = new Fila(5);
})

it("1) acabei de criar a fila, seu tamanho é zero e ela está vazia", () => {
    expect(f.length()).toBe(0);
    expect(f.isEmpty()).toBe(true);
})

it("2) inserir três elementos e depois verificar seu topo", () => {
    f.enqueue(4);
    f.enqueue(5);
    f.enqueue(6);
    expect(f.front()).toBe(4);
    expect(f.isEmpty()).toBe(false);
    expect(f.length()).toBe(3);
})

it("3) Verificando se a fila fica cheia", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");
    f.enqueue("D");
    f.enqueue("E");
    expect(f.isFull()).toBe(true);
    expect(f.length()).toBe(5);
})

it("4) Encher uma Fila e lançar erro de estouro", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue(5);
    f.enqueue(6);
    f.enqueue("E");

    expect(() => f.enqueue(7)).toThrow("QueueOverFlow"); 
})

it("5) Testando comportamento após remover elementos", () => {

    f.enqueue(10);
    f.enqueue(20);
    f.enqueue(30);

    expect(f.front()).toBe(10);
    f.dequeue();

    expect(f.front()).toBe(20);
    f.dequeue();
    
    expect(f.front()).toBe(30);
    f.dequeue();

    expect(f.isEmpty()).toBe(true);
})
