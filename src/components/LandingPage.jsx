import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex justify-center items-center text-white">
      <div className="container px-4">
        <h1 className="text-6xl font-extrabold mb-8 text-center">
          Login/Register Page
        </h1>

        <p className="text-2xl font-semibold text-center">Join Us</p>

        <div className="flex flex-col sm:flex-row mt-8 space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link to="/">
            <button className="bg-white text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
              Log in
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-white text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
