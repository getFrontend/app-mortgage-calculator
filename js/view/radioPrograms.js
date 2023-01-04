import updateModel from "./../utils/updateModel.js";

function init(getData) {

    const radioButtons = document.querySelectorAll('input[name="program"]');
    const { base, it, gov, zero } = getData().programs;

    document.querySelector('#base-value').value = base;
    document.querySelector('#it-value').value = it;
    document.querySelector('#gov-value').value = gov;
    document.querySelector('#zero-value').value = zero;

    document.querySelector('#base-text').innerText = base * 100 + '%';
    document.querySelector('#it-text').innerText = it * 100 + '%';
    document.querySelector('#gov-text').innerText = gov * 100 + '%';
    document.querySelector('#zero-text').innerText = zero * 100 + '%';

    radioButtons.forEach(radioBtn => {
        radioBtn.addEventListener('change', function () {
            updateModel(this, {
                selectedProgram: parseFloat(this.value),
                onUpdate: 'radioProgram',
                id: this.id,
            });
        });
    });
}


export default init;