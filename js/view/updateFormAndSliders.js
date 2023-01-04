import updateMinPercents from "./../utils/updateMinPercents.js";

function updateFormAndSliders(data, cleaveCost, sliderCost, cleavePayment, sliderPayment, cleaveTime, sliderTime) {

    //Update radio buttons
    if (data.onUpdate === 'radioProgram') {
        updateMinPercents(data);

        // Update payment slider
        sliderPayment.noUiSlider.updateOptions({
            range: {
                min: data.minPaymentPercents * 100,
                max: data.maxPaymentPercents * 100,
            }
        });
    }

    // inputCost
    if (data.onUpdate !== 'inputCost') {
        cleaveCost.setRawValue(data.cost);
    }

    // costSlider
    if (data.onUpdate !== 'costSlider') {
        sliderCost.noUiSlider.set(data.cost);
    }

    // inputPayment
    if (data.onUpdate !== 'inputPayment') {
        cleavePayment.setRawValue(data.payment);
    }

    // sliderPayment
    if (data.onUpdate !== 'paymentSlider') {
        sliderPayment.noUiSlider.set(data.paymentPercents * 100);
    }

    // inputTime
    if (data.onUpdate !== 'inputTime') {
        cleaveTime.setRawValue(data.time);
    }
    // sliderTime
    if (data.onUpdate !== 'timeSlider') {
        sliderTime.noUiSlider.set(data.time);
    }
}

export default updateFormAndSliders;