import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.elements.delay.value.trim();
    const selectedState = e.target.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedState === 'fulfilled') {
                resolve(input);
            } else {
                reject(input);
            }
        }, input);
    })
    promise.then(delay => {
        iziToast.success({
            title: 'OK',
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            backgroundColor: '#59a10d',
            messageColor: '#fff',
            progressBarColor: '#326101',
            titleColor: '#fff',
        });
    }).catch(delay => {
        iziToast.error({
            title: 'Error',
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
            backgroundColor: '#ef4040',
            messageColor: '#fff',
            progressBarColor: '#ffbebe',
            titleColor: '#fff',
        });
    })
    form.reset();
})



