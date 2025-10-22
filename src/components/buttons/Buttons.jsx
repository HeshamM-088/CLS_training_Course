import { CiDark } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa6";

const Buttons = ({ emptyCart, resetCart, changeMode }) => {
  return (
    <div className="w-full flex justify-evenly items-center">
      <button className="btn btn-outline btn-md btn-info">Reset</button>
      <button className="btn btn-outline btn-md btn-success">Empty Cart</button>
      <button className="btn btn-outline btn-md btn-warning">
        <CiDark className="text-3xl font-bold" />

        <FaRegLightbulb className="text-3xl font-bold" />
      </button>
    </div>
  );
};

export default Buttons;
