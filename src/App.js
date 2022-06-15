import logo from "./logo.svg";
import "./App.css";
import Link from "./Link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Link page="https://www.facebook.com/">Facebook</Link>
        <Link page="https://www.instagram.com/">Instagram</Link>
      </header>
    </div>
  );
}

export default App;
