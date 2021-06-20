import './App.css';
import Dictionary from './Dictionary.js';



function App() {
  return (
    <div className="App">
      <div className ="container">
      <header className="App-header">
        <h1>
Dictionary
        </h1>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer>
        <small>This dictionary app was coded by <a href="https://www.linkedin.com/in/katja-arndt-b02409a4/">Katja Arndt</a>
        
        
           (have a look at the code on <a href="https://github.com/KatjaArndt/dictionary">GitHub</a>)
          </small>
      </footer>
      </div>
    </div>
  );
}

export default App;
