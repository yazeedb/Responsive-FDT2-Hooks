import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
  return <div className="App">hello world</div>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
