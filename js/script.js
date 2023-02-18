var figurasRitimicas = ["semibreve", "minima", "seminima", "colcheia", "semicolcheia", "fusa",  "tercina", "quialtera"];


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