import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const { delay, state } = event.currentTarget.elements;
  const data = {
    delay: Number(delay.value),
    state: state.value,
  };

  makePromise(data)
    .then(delay => {
      notifySuccess(delay);
    })
    .catch(delay => {
      notifyError(delay);
    });

  event.currentTarget.reset();
}

const makePromise = ({ delay, state }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

function notifyError(delay) {
  iziToast.show({
    message: `Rejected promise in ${delay}ms`,
    messageColor: '#FFFFFF',
    backgroundColor: '#ef4040',
    iconColor: '#FFFFFF',
    iconUrl: '../img/icon-error.svg',
    position: 'topRight',
    timeout: delay,
    closeOnClick: true,
    drag: false,
    pauseOnHover: false,
    close: false,
    progressBar: false,
    animateInside: false,
    transitionIn: 'fadeIn',
    transitionOut: 'fadeOut',
  });
}

function notifySuccess(delay) {
  iziToast.show({
    message: `Fulfilled promise in ${delay}ms`,
    messageColor: '#FFFFFF',
    backgroundColor: '#59A10D',
    iconColor: '#FFFFFF',
    iconUrl: '../img/icon-success.svg',
    position: 'topRight',
    timeout: delay,
    closeOnClick: true,
    drag: false,
    pauseOnHover: false,
    close: false,
    progressBar: false,
    animateInside: false,
    transitionIn: 'fadeIn',
    transitionOut: 'fadeOut',
  });
}
