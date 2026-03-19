import Pilha from "../../src/aula/Pilha";

let p;

beforeEach(() => {
    p = new Pilha (5);
})

it("A pilha recem iniciada é vazia", () =>{
    expect(p.isEmpty()).toBe(true);
})

it("Testando 1 elemento", () =>{
    p.push("A");
    expect(p.top()).toBe("A");
    expect(p.length()).toBe(1);
    expect(p.isFull()).toBe(false);
    expect(p.isEmpty()).toBe(false);
})

it("Testando remoção de Pilha", () =>{
    p.push("A");
    p.push("B");
    p.push("C");
    p.push("D");
    expect(p.top()).toBe("D");
    expect(p.length()).toBe(4);
    expect(p.isEmpty()).toBe(false);
    expect(p.isFull()).toBe(false);
    p.pop();
    expect(p.top()).toBe("C");
    p.pop();
    expect(p.top()).toBe("B");
    p.pop();
    expect(p.top()).toBe("A");
    p.pop();
    expect(p.isEmpty()).toBe(true);
    expect(p.isFull()).toBe(false);
    expect(p.length()).toBe(0);
    expect(() => p.pop()).toThrow("Stack underflow");
})

it("Testando tamanho da pilha", () =>{
    p.push("A");
    p.push("B");
    p.push("C");
    p.push("D");
    p.push("E");
    expect(() => p.push("F")).toThrow("Stack overflow");
})