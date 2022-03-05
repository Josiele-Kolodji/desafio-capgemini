function intervaloEntreNumeros(lista, diferenca) {
    
    let resultado = 0

    for(var i = 0; i < lista.length; i++){

        for (var j = 0; j < lista.length; j++){
        
            if(lista[i] - lista[j] == diferenca){
                
                resultado = resultado + 1
            }  
        }
    }

    console.log(resultado)
}
