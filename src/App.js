import "./App.css";
import Navbar from "./Components/Navbar";
import Community from "./Components/Community";
import Features from "./Components/Features";
import Build from "./Components/Build";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Community />
        <Features />
        <Build />
      </main>
      <Footer />
    </div>
  );
}

export default App;
