const inputPercent = document.getElementById('input-percent')
const inputCPF = document.getElementById('input-cpf')


inputCPF.addEventListener("keydown", (e) => {
    setTimeout(() => {
        let {value} = e.target
        value = value.replace(/[^\d]/g,"")

        console.log(value)

        e.target.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }, 1)
})
inputPercent
    .addEventListener("keydown", (e) => {
    setTimeout(() => {
        let {value} = e.target
        value = value.replace(/\D/g,"")

        value = new Intl.NumberFormat('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        }).format(value/100)

        e.target.value = (value)
    }, 3)
})
