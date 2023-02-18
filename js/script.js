var figurasRitimicas = ["semibreve", "minima", "seminima", "colcheia", "semicolcheia", "fusa",  "tercina", "quialtera"];

var modosGregos = ["jonio", "dorico", "frigio", "lidio", "mixolidio", "eolio", "locrio"];

function sorteadorFigurasRitmicas() {
    
    var n1 = Math.floor(Math.random() * figurasRitimicas.length);
    var n2 = Math.floor(Math.random() * figurasRitimicas.length);
    var n3 = Math.floor(Math.random() * figurasRitimicas.length);
    var n4 = Math.floor(Math.random() * figurasRitimicas.length);

    document.getElementById("primeiro-item").innerHTML = figurasRitimicas[n1];
    document.getElementById("segundo-item").innerHTML = figurasRitimicas[n2];
    document.getElementById("terceiro-item").innerHTML = figurasRitimicas[n3];
    document.getElementById("quarto-item").innerHTML = figurasRitimicas[n4];

}

function sorteadorModosGregos() {

    var n1 = Math.floor(Math.random() * modosGregos.length);
    var n2 = Math.floor(Math.random() * modosGregos.length);

    if (n1 != n2) {
        document.getElementById("primeiro-grego-item").innerHTML = modosGregos[n1];
        document.getElementById("segundo-grego-item").innerHTML = modosGregos[n2];
    } else if (n1 == modosGregos.length) {
        var n1 = Math.floor(Math.random() - 1 * modosGregos.length);
        document.getElementById("primeiro-grego-item").innerHTML = modosGregos[n1];
        document.getElementById("segundo-grego-item").innerHTML = modosGregos[n2];
    }
}