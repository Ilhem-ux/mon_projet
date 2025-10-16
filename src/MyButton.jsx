import { useState } from 'react';

function MyButton() {

  const [count, setCount] = useState(0);

 
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Valeur actuelle : {count}</p>
      <button onClick={handleIncrement}>Incrémenter</button>
      <button onClick={handleDecrement}>Décrémenter</button>
    </div>
  );
}

export default MyButton;
