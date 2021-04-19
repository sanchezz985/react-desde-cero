import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// import new components
import MyComponent from './components/MyComponent'; 

function App() {
  let nombre = "Emmanuel Sánchez Luna";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {nombre} 
          <section className="components">
            <MyComponent></MyComponent>
          </section>
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
