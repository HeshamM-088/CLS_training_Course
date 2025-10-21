import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  let myNumber = 100;

  const increment = () => {
    myNumber += 1;
    console.log(myNumber);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />

      <button className="btn btn-success" onClick={increment}>
        increment
      </button>

      <Home myNumber={myNumber} />
      <hr />
      <Footer myNumber={myNumber} />
    </div>
  );
};

export default App;
