export default {
    created(el, binding) { // Chamado antes que os atributos do elemento ou event (event listeners) seja aplicado
            
        /*
        // ############################### Parâmetro el
        el.style.color = 'red'
        el.style.fontSize = '150%'

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if(tamanhoTextoOriginal > 25) {
            // Vamos truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, 22) + '...'
        } else {
            // Vamos manter o texto original
            textoAjustado = textoOriginal
        }

        el.innerText = textoAjustado
        */

        // ############################### Parâmetro binding (agurmento value)
        //console.log(binding.value)

        if(binding.value?.cor)el.style.color = binding.value.cor
        if(binding.value?.tamanhoFonte)el.style.fontSize = binding.value.tamanhoFonte

        let totalCaracteres = 25
        if(binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres

        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if(tamanhoTextoOriginal > totalCaracteres) {
            // Vamos truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, (totalCaracteres - 3)) + '...'
        } else {
            // Vamos manter o texto original
            textoAjustado = textoOriginal
        }
        el.innerText = textoAjustado
    }
}