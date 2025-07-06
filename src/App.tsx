import React from 'react'
import './index.scss';


function App() {
  const data: string | null = window.localStorage.getItem('count');
  let num: number = data ? Number(data) : 0;
  const [count, setCount] = React.useState<number>(num)

  React.useEffect(() => {
    window.localStorage.setItem('count', String(count))
  }, [count])

  const countPlus = () => {
    setCount(count + 1)
  }
  const countMinus = () => {
    count !== 0 && setCount(count - 1)
  }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={countMinus} className="minus">- Минус</button>
        <button onClick={countPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;