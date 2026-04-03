import ListaLigada from "../../src/aula/ListaLigada";

let lista;

beforeEach(() => {
    lista = new ListaLigada();
});

it("1)Deve iniciar a lista vazia", () => {
    expect(lista.isEmpty()).toBe(true);
    expect(lista.length()).toBe(0);
}); 

it("2)Deve adicionar um elemento no início da lista", () => {
    lista.add("A");
    expect(lista.isEmpty()).toBe(false);

    lista.add("B");
    expect(lista.length()).toBe(2);
}); 

it("3)Deve adicionar um elemento ao final", () =>{
    lista.append("B");//é esperado que esteja sendo iniciado vazio isEmpty
    expect(lista.isEmpty()).toBe(false);
    expect(lista.length()).toBe(1);

    lista.append("A");// Agora esse aqui será o ultimo, e o B automaticamente se torna o penultimo
    expect(lista.length()).toBe(2);
})

it("4)Deve remover elemento do inicio", () =>{
    lista.add(10);// esse o segundo
    lista.add(40);//esse vai ser o primeiro
    lista.append(20);// esse o ultimo
    expect(lista.isEmpty()).toBe(false);
    
    lista.removeFirst();//remove o primeiro elemento da lista, no caso o 40;
    expect(lista.length()).toBe(2);

    lista.removeFirst();// vai remover o 10
    lista.removeFirst();// vai remover o 20
    expect(lista.isEmpty()).toBe(true);
})

it("5)Deve remover elemento do final", () =>{
    lista.append("A");
    lista.append("B");
    lista.append("C");
    lista.append("D");
    expect(lista.isEmpty()).toBe(false);

    lista.removeLast();//vai remover D
    expect(lista.length()).toBe(3);

    lista.removeLast();//vai remover o C
    expect(lista.length()).toBe(2);
    expect(lista.isEmpty()).toBe(false);
})

it("6)Deve Adicionar elemento em uma posição especifica da lista", () =>{
    lista.append("A");
    lista.append("B");
    lista.append("C");
    expect(lista.isEmpty()).toBe(false);
    
    lista.addAt("J", 2);// Agora a lista está A J B C
    lista.addAt("V", 3);// Agora é A J V B C;
    expect(lista.length()).toBe(5);
})

it("7)Deve remover posições especificas da lista", () =>{
    lista.append("A");
    lista.append("J");
    lista.append("V");
    lista.append("B");
    lista.append("C");
    expect(lista.isEmpty()).toBe(false);

    lista.removeAt("V", 3);// agora vai ficar A J B C
    lista.removeAt("J", 2);// A B C
    expect(lista.length()).toBe(3)
})

