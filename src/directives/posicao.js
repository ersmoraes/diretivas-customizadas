export default {
    created(el, binding) {
        //console.log(el, binding.arg, binding.value)

        const posicoesPossiveis = ['relativa', 'fixed', 'absolute']

        if(posicoesPossiveis.includes(binding.arg)) {
            el.style.position = binding.arg
            el.style.top = `${binding.value}px`
        }
    }
}