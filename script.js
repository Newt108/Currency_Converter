const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container');

//Array to populate the select tags with these countries
const contries = [
    {code: "XUA", name: "ADB Unit of Account"},
    {code: "AFN", name: "Afghani"},
    {code: "DZD", name: "Algerian Dinar"},
    {code: "ARS", name: "Argentine Peso"},
    {code: "AMD", name: "Armenian Dram"},
    {code: "AWG", name: "Aruban Florin"},
    {code: "AUD", name: "Australian Dollar"},
    {code: "AZN", name: "Azerbaijanian Manat"},
    {code: "BSD", name: "Bahamian Dollar"},
    {code: "BHD", name: "Bahraini Dinar"},
    {code: "THB", name: "Baht"},
    {code: "PAB", name: "Balboa"},
    {code: "BBD", name: "Barbados Dollar"},
    {code: "BYN", name: "Belarusian Ruble"},
    {code: "BZD", name: "Belize Dollar"},
    {code: "BMD", name: "Bermudian Dollar"},
    {code: "BOB", name: "Boliviano"},
    {code: "VEF", name: "Bolívar"},
    {code: "XBA", name: "Bond Markets Unit European Composite Unit (EURCO)"},
    {code: "XBB", name: "Bond Markets Unit European Monetary Unit (E.M.U.-6)"},
    {code: "XBD", name: "Bond Markets Unit European Unit of Account 17 (E.U.A.-17)"},
    {code: "XBC", name: "Bond Markets Unit European Unit of Account 9 (E.U.A.-9)"},
    {code: "BRL", name: "Brazilian Real"},
    {code: "BND", name: "Brunei Dollar"},
    {code: "BGN", name: "Bulgarian Lev"},
    {code: "BIF", name: "Burundi Franc"},
    {code: "XOF", name: "CFA Franc BCEAO"},
    {code: "XAF", name: "CFA Franc BEAC"},
    {code: "XPF", name: "CFP Franc"},
    {code: "CVE", name: "Cabo Verde Escudo"},
    {code: "CAD", name: "Canadian Dollar"},
    {code: "KYD", name: "Cayman Islands Dollar"},
    {code: "CLP", name: "Chilean Peso"},
    {code: "XTS", name: "Codes specifically reserved for testing purposes"},
    {code: "COP", name: "Colombian Peso"},
    {code: "KMF", name: "Comoro Franc"},
    {code: "CDF", name: "Congolese Franc"},
    {code: "BAM", name: "Convertible Mark"},
    {code: "NIO", name: "Cordoba Oro"},
    {code: "CRC", name: "Costa Rican Colon"},
    {code: "CUP", name: "Cuban Peso"},
    {code: "CZK", name: "Czech Koruna"},
    {code: "GMD", name: "Dalasi"},
    {code: "DKK", name: "Danish Krone"},
    {code: "MKD", name: "Denar"},
    {code: "DJF", name: "Djibouti Franc"},
    {code: "STD", name: "Dobra"},
    {code: "DOP", name: "Dominican Peso"},
    {code: "VND", name: "Dong"},
    {code: "XCD", name: "East Caribbean Dollar"},
    {code: "EGP", name: "Egyptian Pound"},
    {code: "SVC", name: "El Salvador Colon"},
    {code: "ETB", name: "Ethiopian Birr"},
    {code: "EUR", name: "Euro"},
    {code: "FKP", name: "Falkland Islands Pound"},
    {code: "FJD", name: "Fiji Dollar"},
    {code: "HUF", name: "Forint"},
    {code: "GHS", name: "Ghana Cedi"},
    {code: "GIP", name: "Gibraltar Pound"},
    {code: "XAU", name: "Gold"},
    {code: "HTG", name: "Gourde"},
    {code: "PYG", name: "Guarani"},
    {code: "GNF", name: "Guinea Franc"},
    {code: "GYD", name: "Guyana Dollar"},
    {code: "HKD", name: "Hong Kong Dollar"},
    {code: "UAH", name: "Hryvnia"},
    {code: "ISK", name: "Iceland Krona"},
    {code: "INR", name: "Indian Rupee"},
    {code: "IRR", name: "Iranian Rial"},
    {code: "IQD", name: "Iraqi Dinar"},
    {code: "JMD", name: "Jamaican Dollar"},
    {code: "JOD", name: "Jordanian Dinar"},
    {code: "KES", name: "Kenyan Shilling"},
    {code: "PGK", name: "Kina"},
    {code: "LAK", name: "Kip"},
    {code: "HRK", name: "Kuna"},
    {code: "KWD", name: "Kuwaiti Dinar"},
    {code: "AOA", name: "Kwanza"},
    {code: "MMK", name: "Kyat"},
    {code: "GEL", name: "Lari"},
    {code: "LBP", name: "Lebanese Pound"},
    {code: "ALL", name: "Lek"},
    {code: "HNL", name: "Lempira"},
    {code: "SLL", name: "Leone"},
    {code: "LRD", name: "Liberian Dollar"},
    {code: "LYD", name: "Libyan Dinar"},
    {code: "SZL", name: "Lilangeni"},
    {code: "LSL", name: "Loti"},
    {code: "MGA", name: "Malagasy Ariary"},
    {code: "MWK", name: "Malawi Kwacha"},
    {code: "MYR", name: "Malaysian Ringgit"},
    {code: "MUR", name: "Mauritius Rupee"},
    {code: "MXN", name: "Mexican Peso"},
    {code: "MDL", name: "Moldovan Leu"},
    {code: "MAD", name: "Moroccan Dirham"},
    {code: "MZN", name: "Mozambique Metical"},
    {code: "NGN", name: "Naira"},
    {code: "ERN", name: "Nakfa"},
    {code: "NAD", name: "Namibia Dollar"},
    {code: "NPR", name: "Nepalese Rupee"},
    {code: "ANG", name: "Netherlands Antillean Guilder"},
    {code: "ILS", name: "New Israeli Sheqel"},
    {code: "TWD", name: "New Taiwan Dollar"},
    {code: "NZD", name: "New Zealand Dollar"},
    {code: "BTN", name: "Ngultrum"},
    {code: "KPW", name: "North Korean Won"},
    {code: "NOK", name: "Norwegian Krone"},
    {code: "MRO", name: "Ouguiya"},
    {code: "PKR", name: "Pakistan Rupee"},
    {code: "XPD", name: "Palladium"},
    {code: "MOP", name: "Pataca"},
    {code: "TOP", name: "Pa’anga"},
    {code: "CUC", name: "Peso Convertible"},
    {code: "UYU", name: "Peso Uruguayo"},
    {code: "PHP", name: "Philippine Peso"},
    {code: "XPT", name: "Platinum"},
    {code: "GBP", name: "Pound Sterling"},
    {code: "BWP", name: "Pula"},
    {code: "QAR", name: "Qatari Rial"},
    {code: "GTQ", name: "Quetzal"},
    {code: "ZAR", name: "Rand"},
    {code: "OMR", name: "Rial Omani"},
    {code: "KHR", name: "Riel"},
    {code: "RON", name: "Romanian Leu"},
    {code: "MVR", name: "Rufiyaa"},
    {code: "IDR", name: "Rupiah"},
    {code: "RUB", name: "Russian Ruble"},
    {code: "RWF", name: "Rwanda Franc"},
    {code: "XDR", name: "SDR (Special Drawing Right)"},
    {code: "SHP", name: "Saint Helena Pound"},
    {code: "SAR", name: "Saudi Riyal"},
    {code: "RSD", name: "Serbian Dinar"},
    {code: "SCR", name: "Seychelles Rupee"},
    {code: "XAG", name: "Silver"},
    {code: "SGD", name: "Singapore Dollar"},
    {code: "PEN", name: "Sol"},
    {code: "SBD", name: "Solomon Islands Dollar"},
    {code: "KGS", name: "Som"},
    {code: "SOS", name: "Somali Shilling"},
    {code: "TJS", name: "Somoni"},
    {code: "SSP", name: "South Sudanese Pound"},
    {code: "LKR", name: "Sri Lanka Rupee"},
    {code: "XSU", name: "Sucre"},
    {code: "SDG", name: "Sudanese Pound"},
    {code: "SRD", name: "Surinam Dollar"},
    {code: "SEK", name: "Swedish Krona"},
    {code: "CHF", name: "Swiss Franc"},
    {code: "SYP", name: "Syrian Pound"},
    {code: "BDT", name: "Taka"},
    {code: "WST", name: "Tala"},
    {code: "TZS", name: "Tanzanian Shilling"},
    {code: "KZT", name: "Tenge"},
    {code: "XXX", name: "The codes assigned for transactions where no currency is involved"},
    {code: "TTD", name: "Trinidad and Tobago Dollar"},
    {code: "MNT", name: "Tugrik"},
    {code: "TND", name: "Tunisian Dinar"},
    {code: "TRY", name: "Turkish Lira"},
    {code: "TMT", name: "Turkmenistan New Manat"},
    {code: "AED", name: "UAE Dirham"},
    {code: "USD", name: "US Dollar"},
    {code: "UGX", name: "Uganda Shilling"},
    {code: "UZS", name: "Uzbekistan Sum"},
    {code: "VUV", name: "Vatu"},
    {code: "KRW", name: "Won"},
    {code: "YER", name: "Yemeni Rial"},
    {code: "JPY", name: "Yen"},
    {code: "CNY", name: "Yuan Renminbi"},
    {code: "ZMW", name: "Zambian Kwacha"},
    {code: "ZWL", name: "Zimbabwe Dollar"},
    {code: "PLN", name: "Zloty"}
  ];
  
      
//Showing counties from array to select tag
contries.forEach(contry =>{
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = contry.code;
    option1.textContent = option2.textContent = `${contry.code}(${contry.name})`;
    
    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);
    
    //setting default values of select tag
    fromCurrencyElement.value="USD";
    toCurrencyElement.value="INR";
});

//Function to get the exchange rate using API
const getExchangeRate =async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;
    resultElement.textContent = "Fetching Exchange Rate...";

    try {
    //fetch data from API
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);
    
    if(typeof conversionRate === 'undefined'){
        resultElement.textContent = "Exchange rate date is not available for selected country!!!";
        convertedAmountElement = "";
    }
    else{
        convertedAmountElement.value = convertedAmount;
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }
    } 
    catch (error) {
        converterContainer.innerHTML = `<h2>Error while fetching exchange rates!!!</h2>`;
    }
}

//Fetching exchange rate when user inputs the amount
fromAmountElement.addEventListener('input',getExchangeRate);

//Fetching exchange rate when user change currency
fromCurrencyElement.addEventListener('change',getExchangeRate);
toCurrencyElement.addEventListener('change',getExchangeRate);

window.addEventListener('load',getExchangeRate);