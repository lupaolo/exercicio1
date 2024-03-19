class Aluno {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
}

var meuAluno = new Aluno("SeuNome", 25, 70.5);

console.log("Nome do aluno: " + meuAluno.nome);
console.log("Idade do aluno: " + meuAluno.idade);
console.log("Peso do aluno: " + meuAluno.peso);


meuAluno.nome = "Paulo";
meuAluno.idade = 22;
meuAluno.peso = 85;

console.log("Nome do aluno (após alteração): " + meuAluno.nome);
console.log("Idade do aluno (após alteração): " + meuAluno.idade);
console.log("Peso do aluno (após alteração): " + meuAluno.peso);
