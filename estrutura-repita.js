/*
sairLoop: caracter

valor01, valor02: real
inicio

repita
   escreva ("digite o primeiro valor")
   leia(valor01)
   escreva ("digite o segundo valor")
   leia(valor02)
   escreval ("resultado: ", valor01 + valor02)
   escreval ("deseja sair? S/N")
   leia (sairLoop)
ate sairLoop <> "N
*/

function acaoBotao() {
     var sairLoop, valor01, valor02
     do {
        valor01 = prompt("digite o primeiro valor")
        valor02 = prompt("digite o segundo valor")
        document.getElementById("paragrafo").innerText = "Resultado: " + ( parseInt( valor01 ) + parseInt( valor02) )  
        sairLoop = prompt("deseja sair? S/N")
    }while(sairLoop == "N")  
}


