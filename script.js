const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const Url = 'https://api.exchangeratesapi.io/latest?base='
const content = document.querySelector('.wrapper')

  fetch(Url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let info = `

    <h1>Currency Converter</h1>
    <div id ="container">
      <div class = "currency options">
        <label for = "currency-selection">Choose Currency 1:</label>
        <select id= "currency-select">
           <option value="">--Please Select A Currency--</option>
           <option value="">--Please choose an option--</option>
           <option value="EUR">EUR</option>
           <option value="CAD">CAD</option>
           <option value="HKD">HKD</option>
           <option value="ISK">ISK</option>
           <option value="PHP">PHP</option>
           <option value="DKK">DKK</option>
           <option value="HUF">HUF</option>
           <option value="CZK">CZK</option>
           <option value="AUD">AUD</option>
           <option value="RON">RON</option>
           <option value="SEK">SEK</option>
           <option value="IDR">IDR</option>
           <option value="INR">INR</option>
           <option value="BRL">BRL</option>
           <option value="RUB">RUB</option>
           <option value="HRK">HRK</option>
           <option value="JPY">JPY</option>
           <option value="THB">THB</option>
           <option value="CHF">CHF</option>
           <option value="SGD">SGD</option>
           <option value="PLN">PLN</option>
           <option value="BGN">BGN</option>
           <option value="TRY">TRY</option>
           <option value="CNY">CNY</option>
           <option value="NOK">NOK</option>
           <option value="NZD">NZD</option>
           <option value="ZAR">ZAR</option>  
           <option value="USD">USD</option>  
           <option value="MXN">MXN</option>  
           <option value="ILS">ILS</option>  
           <option value="GBP">GBP</option>  
           <option value="KRW">KRW</option>  
           <option value="MYR">MYR</option>  
       </select>     
   </div> 

   <label for = "currency-selection">Choose Currency 2:</label>
        <select id= "currency-select">
           <option value="">--Please Select A Currency--</option>
           <option value="">--Please choose an option--</option>
           <option value="EUR">EUR</option>
           <option value="CAD">CAD</option>
           <option value="HKD">HKD</option>
           <option value="ISK">ISK</option>
           <option value="PHP">PHP</option>
           <option value="DKK">DKK</option>
           <option value="HUF">HUF</option>
           <option value="CZK">CZK</option>
           <option value="AUD">AUD</option>
           <option value="RON">RON</option>
           <option value="SEK">SEK</option>
           <option value="IDR">IDR</option>
           <option value="INR">INR</option>
           <option value="BRL">BRL</option>
           <option value="RUB">RUB</option>
           <option value="HRK">HRK</option>
           <option value="JPY">JPY</option>
           <option value="THB">THB</option>
           <option value="CHF">CHF</option>
           <option value="SGD">SGD</option>
           <option value="PLN">PLN</option>
           <option value="BGN">BGN</option>
           <option value="TRY">TRY</option>
           <option value="CNY">CNY</option>
           <option value="NOK">NOK</option>
           <option value="NZD">NZD</option>
           <option value="ZAR">ZAR</option>  
           <option value="USD">USD</option>  
           <option value="MXN">MXN</option>  
           <option value="ILS">ILS</option>  
           <option value="GBP">GBP</option>  
           <option value="KRW">KRW</option>  
           <option value="MYR">MYR</option>  
       </select>     
   </div> 
   <div class="convert-button">
     <label for="value">Value:</label>
          <input type="number">
          <input type="submit" value="Convert">
   </div>
   <div class="result">
   </div>
   </div>`
   content.innerHTML = info

   selectElement = document.querySelector('#currency-select')

   selelctElement.addEventListener('change' , (event) => {
     let result = document.querySelector('.result')
     result.textContent = '${Event.target.value}'
     })
    }) 
