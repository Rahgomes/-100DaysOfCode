const formatter = Intl.NumberFormat('pt-br');

function formatNumber(value) {
    return formatter.format(value);
}

function formatPercentage(value) {
    const stringValue = value.toFixed(2);

    return stringValue.replace('.', ',') + '%';
}

export { formatNumber, formatPercentage };