/*
 nome: caracter
 idade, limite, contador: inteiro

inicio

   escreva ("digite a quantidades de vezes que vai ser verificado a idade: ")
   leia (limite)
   contador := 0
   enquanto contador < limite faca
       escreva("digite o nome da pessoa: ")
       leia (nome)
       escreva ("digite a idade do ", nome, ": ")
       leia (idade)
       se idade < 18 Entao
           escreval (nome, " tu eh de menor, criança mete o pé")
       senao
           escreval (nome, " tu eh de maior,pode ser preso kkkk")
       fimse
       contador := contador + 1
     fimenquanto
     */
     
function acaoBotao () {    
     var idade, limite, contador, nome
     limite = prompt ("digite a quantidades de vezes que vair ser verificado a idade: ")
     contador = 0
     while(contador < limite){
         nome = prompt("digite o nome da pessoa: ")
         idade: prompt ("digite a idade do" +  nome)
         if (idade > 18 )
            document.getElementById("paragrafo").innerText = nome + "tu eh de menor,mete o pé criança "
         else
            document.getElementById("paragrafo").innerText = nome + "tu eh de maior,kkkk veio ferrado " 
        contador++
     }
     
    }