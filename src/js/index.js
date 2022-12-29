const btnEnviar = document.querySelector('.botao')
const campo = document.querySelectorAll('[required]')
const required = document.querySelectorAll('span')

btnEnviar.addEventListener('click', () => {
    campo.forEach((item, indice) => {
        if (item.value === '') {
            item.classList.remove('valido')
            item.classList.add('invalido')
            required[indice].classList.add('obrigatorio')
        } else if (item.value !== '') {
            item.classList.add('valido')
            item.classList.remove('invalido')
            required[indice].classList.remove('obrigatorio')
        }
    })
})