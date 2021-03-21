function contar() {

    let inicio = document.getElementById('txtInicio')
    let fim =  document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('res')

        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            res.innerHTML = 'Impossivel contar!'
            window.alert('[ERRO] Faltam dados!')            
        } else {
             res.innerHTML = `<strong>Contando: </strong><br>`
             let i = Number(inicio.value)
             let f = Number(fim.value)
             let p = Number(passo.value)
        if (p <= 0) {
            window.alert('[ERRO] Passo inválido! Considerando PASSO 1')
            p = 1;  
        }
        if (i < f) { // contagem crescente
            for (let index = i; index <= f; index += p) {
                res.innerHTML += ` ${index} \u{1F449} `
        }
                    res.innerHTML += ` FIM \u{1F3C1}`
        } else { // contagem decrescente
            for (let index = i; index >= f; index -= p) {
                res.innerHTML += ` ${index} \u{1F449} ` 
            }  
                    res.innerHTML += ` FIM \u{1F3C1}`
        }
    }
}
