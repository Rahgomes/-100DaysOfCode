const formatter = Intl.NumberFormat('pt-BR');

function formatNumer(value) {
    return formatter.format(value)
}

export { formatNumer }