function contar(){
    
    let inicio = document.getElementById('start')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passo')

    let retorno = document.getElementById('retorno')

    // verificar validade dos dados - Se não tem dado digitado ou incorreto

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Impossivel contar sem os dados')
        retorno.innerHTML('Impossível Contar')
    }else{
        //convertendo para números
        retorno.innerHTML = `Contando: `

        let ni = Number(inicio.value)
        let nf = Number(fim.value)
        let np = Number(passos.value)

        if(np <= 0){
            alert('Passo inválido. Considerando o PASSO com o valor de 1')
            np = 1
        }

        if(ni < nf){ //contagem crescente
            for(let c=ni; c < nf; c += np){
                retorno.innerHTML += `${c} \u{1F449} `
                }
            
        }else{ //contagem regressiva

            for(let c= ni; c >= nf; c -= np){
                retorno.innerHTML += `${c} \u{1F449} `
                }
            
            
        }

        retorno.innerHTML += `\u{1F6A7}`
        
    }

  

    //teste
    //retorno.innerHTML = `${c}`
}


//retorno.innerHTML = `${passos.value}`