import * as Model from "./model.js";

function createForm() {
    const openFormBtn = document.querySelector('#openFormBtn');
    const orderForm = document.querySelector('#orderForm');
    const submitFormBtn = document.querySelector('#submitFormBtn');

    openFormBtn.addEventListener('click', function () {
        orderForm.classList.remove('none');
        openFormBtn.classList.add('none');
    })

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(orderForm);

        submitFormBtn.setAttribute('disabled', true);
        submitFormBtn.innerText = 'Заявка отправляется';

        orderForm.querySelectorAll('input').forEach(function (input) {
            input.setAttribute('disabled', true);
        });

        fetchData(formData);
    });

}

async function fetchData(formData) {
    const data = Model.getData();
    const results = Model.getResults();

    let url = checkOnUrl(document.location.href);

    const response = await fetch(url + 'mail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            form: {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
            },
            data,
            results,
        }),
    });

    const result = await response.text();
    console.log(result)

    submitFormBtn.removeAttribute('disabled', true);
    submitFormBtn.innerText = 'Оформить заявку';

    orderForm.querySelectorAll('input').forEach((input) => {
        input.removeAttribute('disabled', true);
    });

    // Очищаем поля формы
    orderForm.reset();
    orderForm.classList.add('none');

    // На основе ответа от сервера показываем сообщения об Успехе или Ошибке
    if (result === 'SUCCESS') {
        document.getElementById('success').classList.remove('none');
    } else {
        document.getElementById('error').classList.remove('none');
    }

}

function checkOnUrl(url) {
    let urlArrayDot = url.split('.');

    if (urlArrayDot[urlArrayDot.length - 1] === 'html') {
        urlArrayDot.pop();

        let urlArraySlash = urlArrayDot.join('.').split('/');
        urlArraySlash.pop();

        let newUrl = urlArraySlash.join('/');

        let newUrlSlash = newUrl.split('');
        if (newUrlSlash[newUrlSlash.length - 1] !== '/') {
            newUrl = newUrlSlash.join('') + '/';
        }

        return newUrl;
    }

    return url;
}


export default createForm;