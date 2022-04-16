import "./styles.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          This website was coded by Carol J. Pedersen. <br />
          <a
            href="https://github.com/cjp0421/dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Check out the code on GitHub!
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
