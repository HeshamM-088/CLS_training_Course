import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  // const [products, setProducts] = useState([
  //   { id: 1, name: "Mobile", price: 10, items: 1 },
  //   { id: 2, name: "TV", price: 20, items: 1 },
  //   { id: 3, name: "Laptop", price: 30, items: 1 },
  //   { id: 4, name: "Smart_Watch", price: 40, items: 1 },
  // ]);

  // const [stock] = useState([
  //   { id: "a", name: "Mobile", price: 10, items: 1 },
  //   { id: "b", name: "TV", price: 20, items: 1 },
  //   { id: "c", name: "Laptop", price: 30, items: 1 },
  //   { id: "d", name: "Smart_Watch", price: 40, items: 1 },
  // ]);

  // const [themeMode, setThemeMode] = useState(true);

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    console.log("effect mount");

    getUsers();
  }, []);

  return (
    <div className="text-center py-8">
      <h1>Number is {num}</h1>

      <button
        className="btn btn-primary"
        onClick={() => setNum((prev) => (prev += 1))}
      >
        change number
      </button>

      {users.map((user, id) => (
        <h1 key={id}>...</h1>
      ))}
    </div>
  );
};

export default App;
