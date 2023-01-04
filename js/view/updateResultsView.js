import { priceFormatter, priceFormatterHundredths } from "./../utils/formatters.js";

function updateResultsView(results) {
    document.querySelector('#total-month-payment').innerHTML = priceFormatterHundredths.format(results.monthPayment);
    document.querySelector('#total-cost').innerHTML = priceFormatter.format(results.totalAmount);
    document.querySelector('#total-percent').innerHTML = results.rate * 100 + '%';
    document.querySelector('#total-overpayment').innerHTML = priceFormatterHundredths.format(results.overPayment);
}

export default updateResultsView;