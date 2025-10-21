import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div id="app">
      <NavBar />
      <div className="min-h-[75vh]">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
