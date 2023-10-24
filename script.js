const currencySelection = document.getElementById('currency');
const exchangeSelection = document.getElementById('exchange');

const currencyInput = document.getElementById('currency-value');
const exchangeInput = document.getElementById('exchange-value');

const changeBtn = document.getElementById('change-currency');
const changeInfo = document.getElementById('change-info');

// Fetch Exchange Rate and Update DOM
function calculate() {
    const currencyValue = currencySelection.value; 
    const exchangeValue = exchangeSelection.value; 

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyValue}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[exchangeValue];

        changeInfo.innerHTML= `1 ${currencyValue} = ${rate} ${exchangeValue}`;
   
        exchangeInput.value = (currencyInput.value * rate).toFixed(2);
    });
}


//Event Listener 
currencySelection.addEventListener('change',calculate);
exchangeSelection.addEventListener('change',calculate);

currencyInput.addEventListener('input',calculate);
exchangeInput.addEventListener('input',calculate);

changeBtn.addEventListener('click', () =>{
    const temp = currencySelection.value;
    currencySelection.value = exchangeSelection.value;
    exchangeSelection.value = temp;
    calculate();
});

calculate();