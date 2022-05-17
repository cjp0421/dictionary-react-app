import "./styles.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="innerContainer">
          <main>
            <h1 className="text-center">Dictionary</h1>
            <q>I like good strong words that mean something.</q>
            <br />
            <p className="quotationAuthor">
              {" "}
              —Louisa May Alcott (from "Little Women")
            </p>
            <br />
            <Dictionary />
          </main>
          <br />
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
    </div>
  );
}

export default App;
