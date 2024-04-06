import './App.css';

import {useState} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Link
          style={{pointerEvents: count === 0 ? '' : 'none'}}
          to="/"
        >
          Home
        </Link>

        <br />
        <br />

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </Router>
  );
}
