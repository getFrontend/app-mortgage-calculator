const priceFormatter = new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
});

const priceFormatterHundredths = new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 2,
});

export { priceFormatter, priceFormatterHundredths };