function mediana(lista){

    let novaLista = lista.sort((a,b) => a-b) 
    let tamanhoArray = novaLista.length
    let metadeArr = tamanhoArray / 2 
    let mediana = 0
    
    if (tamanhoArray % 2 == 0){
        
        let primeiroValor = novaLista[metadeArr]
        let segundoValor = novaLista[metadeArr -1 ]
        mediana = (primeiroValor + segundoValor) / 2
        
    } else {
        
        let meio = Math.floor(metadeArr)
        mediana = novaLista[meio]
        
    }   
    
    console.log (mediana)

}
