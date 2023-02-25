import React, { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(currentCount => currentCount + 1);
  }

  useEffect(() => console.log(count),
    [count]);

  return (
    <div>
      <button onClick={handleClick}>Нажми меня</button>
      <p>Кнопку нажали {count} раз</p>
    </div>
  )

}

export default App;
