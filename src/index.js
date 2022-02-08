import ReactDOM from 'react-dom';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);
  console.log(state);

  const increment = () => {
    setState(state + 1);
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h3>Incremented Value: {state}</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
