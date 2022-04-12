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
          Check out the code on GitHub!
        </footer>
      </div>
    </div>
  );
}

export default App;
