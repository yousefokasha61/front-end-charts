import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const body = {
  "id": "7"
};

function App() {

  const fetchSensorData = () => {
    console.log("W")
    axios.post("https://www.splatform.blue:3000/Monthly/BSA", body)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(fetchSensorData,[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
