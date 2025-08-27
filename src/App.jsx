import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';

const course = {
  "base": "USD",
  "date": "2025-08-25",
  "rates": {
    "EUR": 1.1595,
    "USD": 1,
    "CNY": 0.1386,
    "GBP": 1.2908,
    "CHF": 1.0954,
    "JPY": 0.0072,
    "AUD": 0.6961,
    "CAD": 0.7597,
    "SEK": 0.1019,
    "NOK": 0.1061,
    "DKK": 0.1391,
    "PLN": 0.2258,
    "CZK": 0.0428,
    "UAH": 0.0263,
    "KZT": 0.0023,
    "BYR": 0.3869,
    "AZN": 0.5725,
    "AMD": 0.0021,
    "GEL": 0.3042,
    "UZS": 0.0001,
    "RUB": 80.8001
  }
}




function App() {
  const [rates, setRates] = React.useState(course.rates)
  /* React.useEffect(() => {
    fetch('https://cdn.cer.su//api/latest.json').then((res)=>res.json()).then((json)=>{
      setRates(json.rates);
      console.log(json.rates);
    }).catch((err)=>{
      console.warn(err);
      alert('Не удалось получить инфу');
    });
  }, []); */

  const [fromCur, setFromCur] = useState('RUB')
  const [toCur, setToCur] = useState('USD')
  const [fromPrise, setFromPrise] = useState(0)
  const [toPrise, setToPrise] = useState(0)
  const onChangeFromPrice = (val) => {
    setFromPrise(val)

    const price = val / rates[fromCur];
    const result = price * rates[toCur]

    setToPrise(result)
  }
  const onChangeToPrice = (val) => {
    const price = val / rates[toCur];
    const result = price * rates[fromCur]
    setFromPrise(result)
    setToPrise(val)
  }
  useEffect(() => {
    onChangeFromPrice(fromPrise)
  }, [fromCur])
  useEffect(() => {
    onChangeToPrice(toPrise)
  }, [toCur])



  return (
    <div className="App">
      <Block value={fromPrise} currency={fromCur} onChangeCurrency={setFromCur} onChangeValue={onChangeFromPrice} />
      <Block value={toPrise} currency={toCur} onChangeCurrency={setToCur} onChangeValue={onChangeToPrice} />
    </div>
  );
}

export default App;