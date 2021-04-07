import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Homepage />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
