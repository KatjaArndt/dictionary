import './App.css';
import Dictionary from './Dictionary.js';



function App() {
  return (
    <div className="App">
      <div className ="container">
      <header className="App-header">
        <p>
          Learn React
          </p>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className ="center">
        Coded by Katja Arndt
      </footer>
      </div>
    </div>
  );
}

export default App;
