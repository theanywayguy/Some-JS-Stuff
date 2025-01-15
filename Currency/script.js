document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = () => {
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
            .then(response => response.json())
            .then(data => {
                const currency = document.querySelector('#currency').value.toUpperCase();
                const rate = data.rates[currency];
                if (rate !== undefined) {
                    document.querySelector('#result').innerHTML = `1 USD IS EQUAL TO ${rate.toFixed(3)} ${currency}`;
                } else {
                    document.querySelector('#result').innerHTML = `INVALID CURRENCY`;
                }
            })
            .catch(error=>{
            document.querySelector('#result').innerHTML=`SOME ERROR OCCURED`
            })
        return false;
    };
});