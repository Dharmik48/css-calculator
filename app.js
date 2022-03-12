const equals = document.getElementById('equal'),
      usrInput = document.querySelector('.number'),
      allowed = ['clear', 'equals', 'back'];
let input = [],
    ans = '',
    history = document.querySelector('.history');

document.querySelector('.btns').addEventListener('click', (e) => {
    const operator = e.target.getAttribute('data-value') || '';
    const number = e.target.getAttribute('data-number') || '';

    if (number) {
        usrInput.value += number;
    }
    if (operator === 'back') {
        usrInput.value = usrInput.value.slice(0, -1);
    }
    if (operator === 'clear') {
        usrInput.value = '';
        history.innerText = '';
    }
    if (operator !== '' && !allowed.includes(operator)) {
        history.innerText += usrInput.value;
        history.innerText += operator;
        usrInput.value = '';
    }
    if (operator === 'equals') {
        history.innerText += usrInput.value;
        usrInput.value = '';
        ans = eval(history.innerText);
        usrInput.value = ans;
    }
});

// Dark and Light modes

const modes = document.querySelectorAll('.fas');
const lightModeToAdd = document.querySelectorAll('.l');

modes[0].addEventListener('click', () => {
    if (modes[0].classList[2]) {
        modes[1].classList.add('unactive');
        modes[0].classList.remove('unactive');

        lightModeToAdd.forEach(el => {
            if (!el.classList[2]) {
                el.classList.add('light');
            }
        });
    }
});
modes[1].addEventListener('click', () => {
    modes[0].classList.add('unactive');
    modes[1].classList.remove('unactive');

    lightModeToAdd.forEach(el => {
        if (el.classList[2]) {
            el.classList.remove('light');
        }
    });
});