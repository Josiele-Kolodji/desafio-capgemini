function encriptar(mensagem) {

    mensagem = mensagem.replaceAll(' ','')
    
    let tamanhoTexto = mensagem.length
    let tamanhoGrid = Math.round(Math.sqrt(tamanhoTexto))
    let arr = []
    let posicaoInicial = 0
    let posicaoFinal = tamanhoGrid
    let resultado = ''
    
    for(var i = 0; i < tamanhoGrid; i ++){
    
        arr[i] = mensagem.substring(posicaoInicial, posicaoFinal)
    
        posicaoInicial = posicaoFinal
        posicaoFinal += tamanhoGrid
    
    }
    
    for(var i = 0; i < tamanhoTexto; i++) {
        for(var j = 0; j < tamanhoGrid; j++) {
            if(j % tamanhoGrid == 0) {
                resultado += " "    
            }
            resultado += arr[j].substring(i, i+1)  
        }
    }

    return resultado.trim()
}
