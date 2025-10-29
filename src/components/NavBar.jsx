import { Link, NavLink } from "react-router-dom";

const NavBar = ({ products }) => {
  return (
    <div className="navbar flex w-full justify-between bg-neutral text-neutral-content">
      <div className="">
        <a className="btn btn-ghost text-xl">CSL</a>
      </div>

      <div>
        <ol className="flex justify-center gap-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ol>
      </div>

      <div className="flex-none" as={Link} to="/cart">
        <div className="dropdown dropdown-end">
          <Link
            to="/cart"
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {products.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
