
var idades = [];
var maioresDeIdade = 0;
var menoresDeIdade = 0;

for (var i = 0; i < 10; i++) {
    var idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades.push(idade);
}

for (var j = 0; j < idades.length; j++) {
    if (idades[j] >= 18) {
        maioresDeIdade++;
    } else {
        menoresDeIdade++;
    }
}

alert("Pessoas maiores de idade: " + maioresDeIdade);
alert("Pessoas menores de idade: " + menoresDeIdade);
