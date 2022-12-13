    
    
    function acaoBotao() {
        var valor01, valor02, resultado, operacao 
        valor01 = prompt ("digite o primeiro valor")
        operacao = prompt ("digite a operação: EX: +,-,* e /")
        valor02 = prompt ("digite o segundo valor")
        
        if (operacao == "+"){
            resultado = parseint  (valor01) + parseint (valor02)
        }else if (operacao == "-"){
            resultado = parseint (valor01) - parseint (valor02)
        } else if (operacao == "*"){
            resultado = parseint (valor01) * parseint (valor02)
        } else if (operacao == "/"){
        resultado = parseint (valor01) / parseint (valor02)
        }
        document.getElementById("paragrafo").innerText = resultado
    }
            
    







