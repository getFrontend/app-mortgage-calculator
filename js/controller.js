import * as Model from "./model.js";
import programs from './view/radioPrograms.js';
import updateResultsView from './view/updateResultsView.js';
import updateFormAndSliders from "./view/updateFormAndSliders.js";

import costInput from './view/costInput.js';
import costRange from './view/costRange.js';

import paymentInput from './view/paymentInput.js';
import paymentRange from './view/paymentRange.js';

import timeInput from './view/timeInput.js';
import timeRange from './view/timeRange.js';

import createForm from "./form.js";


window.onload = function () {
    const getData = Model.getData;

    // Init Programs
    programs(getData);

    // Init Cost input
    const cleaveCost = costInput(getData);
    const sliderCost = costRange(getData);

    const cleavePayment = paymentInput(getData);
    const sliderPayment = paymentRange(getData);

    const cleaveTime = timeInput(getData);
    const sliderTime = timeRange(getData);

    Model.setData({});
    const results = Model.getResults();
    updateResultsView(results);

    document.addEventListener('updateForm', (e) => {
        Model.setData(e.detail);

        const data = Model.getData();
        const results = Model.getResults();

        // Update all from view based on model
        updateFormAndSliders(data, cleaveCost, sliderCost, cleavePayment, sliderPayment, cleaveTime, sliderTime);

        // Update results block
        updateResultsView(results);
    })

    // Init form
    createForm();
}