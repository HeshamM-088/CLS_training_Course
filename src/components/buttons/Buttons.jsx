const Buttons = () => {
  return (
    <div className="w-full flex justify-evenly items-center">
      <button className="btn btn-outline btn-sm btn-info">Reset</button>
      <button className="btn btn-outline btn-sm btn-success">Empty Cart</button>
      <button className="btn btn-outline btn-sm btn-warning">Dark/Light</button>
    </div>
  );
};

export default Buttons;
