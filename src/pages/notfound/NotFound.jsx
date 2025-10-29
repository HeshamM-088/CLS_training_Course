import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const directUser = () => {
    navigate("/login", { state: { msg: "Hello" } });
  };

  return (
    <div>
      <h1>NotFound</h1>

      <button className="btn btn-accent" onClick={directUser}>
        Back Home
      </button>
    </div>
  );
};

export default NotFound;
