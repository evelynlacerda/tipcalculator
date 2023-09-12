// Constantes que serão utilizadas no código
const billInput = document.querySelector('[data-bill]');
const billAlert = document.querySelector('[data-alert-bill]');
const billBox = document.querySelector('[data-bill-box]');

const tipCustom = document.querySelector('[data-tip-custom]');
const tipButtons = document.querySelectorAll('[data-tip-button]');

const peopleInput = document.querySelector('[data-people]');
const peopleAlert = document.querySelector('[data-alert-people]');
const peopleBox = document.querySelector('[data-people-box]');

const amountResult = document.querySelector('[data-amount-value]');
const totalResult = document.querySelector('[data-total-value]');
const resetButton = document.querySelector('[data-reset-button]');

// Valores apresentados como default
billInput.value = "";
peopleInput.value = "";
amountResult.innerText = "R$ " + (0, 0).toFixed(2);
totalResult.innerText = "R$ " + (0, 0).toFixed(2);

// Variáveis que serão utilizadas no código
let billValue;
let peopleValue;
let tipValue;

// Função para a input de bill
function billFun() {
    billValue = parseFloat(billInput.value);

    if (billValue <= 1) {
        billAlert.style.display = 'flex';
        billBox.style.border = '1px solid red';

    } else {
        billAlert.style.display = 'none';
        billBox.style.border = 'none';

        calculateTip();
    }
}

// Função para a input de gorjeta personalizada
function tipFun() {
    tipValue = parseFloat(tipCustom.value / 100);

    tipButtons.forEach(function (tipPercent) {
        tipPercent.classList.remove('active');
    })

    calculateTip();
}

// Função para os botões de gorjetas
function handleClick(event) {
    tipButtons.forEach(function (tipPercent) {
        tipPercent.classList.remove('active');

        if (event.target.innerHTML == tipPercent.innerHTML) {
            tipPercent.classList.add('active');
            tipValue = parseFloat(tipPercent.innerHTML) / 100;
        }
    })

    calculateTip();
}

// Função para a quantidade de pessoas
function peopleFun() {
    peopleValue = parseFloat(peopleInput.value);

    if (peopleValue < 1) {
        peopleAlert.style.display = 'flex';
        peopleBox.style.border = '1px solid red';

    } else {
        peopleAlert.style.display = 'none';
        peopleBox.style.border = 'none';

        calculateTip();
    }
}

billInput.addEventListener('input', billFun); // Chama a função do valor da conta
tipCustom.addEventListener('input', tipFun); // Chama a função da gorjeta personalizada
tipButtons.forEach(function (tipPercent) {
    tipPercent.addEventListener('click', handleClick); // Chama a função da gorjeta padrão
});
peopleInput.addEventListener('input', peopleFun); // Chama a função para pegar o número de pessoas

// Calculo da gorjeta
function calculateTip() {
    if (billValue <= 1 && peopleValue < 1) {

        amountResult.innerText = "R$ " + (0, 0).toFixed(2);
        totalResult.innerText = "R$ " + (0, 0).toFixed(2);
        return;

    } else if (billValue > 1 || peopleValue >= 1) {

        let tipAmount = (billValue * tipValue) / peopleValue;
        let totalAmount = ((tipAmount * peopleValue) + billValue) / peopleValue;

        amountResult.innerHTML = "R$ " + tipAmount.toFixed(2);
        totalResult.innerHTML = "R$ " + totalAmount.toFixed(2);
    }
}

// Função para resetar os valores
function reset() {
    billInput.value = "";
    tipButtons.forEach(function (remove) {
        remove.classList.remove('active');
    });
    tipCustom.value = "";
    peopleInput.value = "";
    amountResult.innerText = "R$ " + (0, 0).toFixed(2);
    totalResult.innerText = "R$ " + (0, 0).toFixed(2);

    billAlert.style.display = 'none';
    billBox.style.border = 'none';

    peopleAlert.style.display = 'none';
    peopleBox.style.border = 'none';
}

resetButton.addEventListener("click", reset);