/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  return (
    <>
      <header className="flex justify-between items-center p-4 border border-b-gray-200 border-x-0">
        <h1 className="font-bold text-lg text-red-400 md:text-2xl">
          <Link to="/">E-Commerce</Link>
        </h1>
        <nav>
          <ul className="flex items-center text-center md:gap-4">
            {!isLoggedIn && (
              <li className="md:p-2">
                <Link to="/register">
                  <i className="bx bxs-user-plus w-10 font-bold text-3xl"></i>
                </Link>
              </li>
            )}
            <li className="md:p-2">
              {!isLoggedIn ? (
                <Link to="/login">
                  <i className="bx bxs-user w-10 font-bold text-2xl"></i>
                </Link>
              ) : (
                <Link to="/login">
                  <i className="bx bxs-user-x w-10 font-bold text-3xl"></i>
                </Link>
              )}
            </li>
            <li className="md:p-2">
              <Link to="/purchases">
                <i className="bx bxs-shopping-bags w-10 font-bold text-2xl"></i>
              </Link>
            </li>
            <li className="md:p-2">
              <Link to="/cart">
                <i className="bx bx-cart w-10 font-bold text-2xl text-red-400"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
