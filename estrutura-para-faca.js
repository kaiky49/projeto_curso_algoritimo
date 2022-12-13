/*numero, fatorial, contador: inteiro


Inicio

escreval("escreva o numero para fazer o fatorial:")
leia(numero)
fatorial := 1
 para contador de 1 ate numero faca
      fatorial := contador * contador
   fimpara
escreva("o fatorial de ", numero, " é: " fatorial)
*/


function acaoBotao() {
    var numero, fatorial 
    numero = prompt ("escreva o nimero para fazer o fatorial")
    fatorial = 1 
    for (contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador


        
    }

    document.getElementById("paragrafo").innerText = "o fatorial de " +  numero + " é : " + fatorial

}