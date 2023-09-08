const bill = document.querySelector('[data-bill]');
const tips = document.querySelectorAll('[data-tip-button]');
const customTip = document.querySelector('[data-custom-tip]');
const people = document.querySelector('[data-people]');
const amountValue = document.querySelector('[data-amount-value]');
const totalValue = document.querySelector('[data-total-value]');
const calcButton = document.querySelector('[data-calc-button]');
const resetButton = document.querySelector('[data-reset-button]');

let billvalue = 0

function billValue () {
    
}





/*
    Tip Calculator
    
    Passo a passo:
    1. Calcular o valor da gorjeta
    2. Calcular o valor total
    3. Exibir os valores na tela

    - Pegar todos os elementos do DOM que serão utilizados
    - Pegar o valor total da conta
    - Pegar o valor da gorjeta selecionada
    - Pegar o valor da gorjeta customizada
    - Pegar o número de pessoas
    - Calcular o valor total da gorjeta: (valor da conta * gorjeta) / numero de pessoas
    - Calcular o valor total: (valor da conta + valor total da gorjeta) / número de pessoas

    Dicas:
    - Utilize o método toFixed() para limitar o número de casas decimais
    - Utilize o método parseFloat() para converter o valor de string para float
    - Utilize o método isNaN() para verificar se o valor não é um número
    - Utilize o método Math.ceil() para arredondar o valor para cima
    - Utilize o método Math.floor() para arredondar o valor para baixo
*/