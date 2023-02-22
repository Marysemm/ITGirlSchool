import React, { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
  }

  useEffect(() => console.log(count),
    [count]);

  return (
    <button onClick={handleClick}>{count}</button>
  )

}

export default App;
