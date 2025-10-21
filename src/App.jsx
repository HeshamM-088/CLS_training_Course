import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  let [myNumber, setMyNumber] = useState(100);

  let [status, setstatus] = useState(false);

  const increment = () => {
    setMyNumber((prev) => (prev += 1));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />

      <button className="btn btn-success" onClick={increment}>
        increment
      </button>

      <button
        className="btn btn-success"
        onClick={() => setstatus((prev) => !prev)}
      >
        change Status
      </button>

      <Home myNumber={myNumber} />
      <hr />
      <Footer myNumber={myNumber} />

      {status ? <h1>Lorem ipsum dolor sit amet.</h1> : <h1>empty</h1>}
    </div>
  );
};

export default App;
