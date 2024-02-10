import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [errors, setError] = useState({});
  const [sumbitting, setSumbitting] = useState(false);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(checkValues(fields));
    setSumbitting(true);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "https://reqres.in/api/users",
          fields
        );

        if (response.status === 201) {
          console.log("User created successfully:", response.data);
        } else {
          console.error("Error creating user:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending request:", error);
      } finally {
        setSumbitting(false);
      }
    }
  };

  const checkValues = (fields) => {
    let errors = {};
    if (fields.email.length < 15) {
      errors.email = "Email is too short";
    }
    if (fields.password.length < 5) {
      errors.password = "Password is too short";
    }
    if (fields.username.length < 3) {
      errors.username = "Username is too short";
    }
    return errors; // Added return statement
  };

  const finishSubmit = () => {
    console.log(fields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && sumbitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {Object.keys(errors).length === 0 && sumbitting ? (
        <span className="text-3xl text-green-400">
          Successfully submitted ✓
        </span>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-8 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">Join Us</h1>

        <div className="flex flex-col space-y-4">
          <p>
            <label className="block text-gray-600 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={fields.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></input>
            {errors.username ? (
              <p className="text-xl text-red-400">
                Usuername should be at least 5 characters long
              </p>
            ) : null}
          </p>

          <p>
            <label className="block text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></input>
            {errors.email ? (
              <p className="text-xl text-red-400">
                Email should be at least 15 characters long
              </p>
            ) : null}
          </p>
          <p>
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              value={fields.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></input>
            {errors.password ? (
              <p className="text-xl text-red-400">
                Password should be at least 5 characters long
              </p>
            ) : null}
          </p>
        </div>
        <p className="mt-4">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            required
            className="mr-2"
          />
          <span className="text-gray-600">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              name="terms"
              className="text-blue-500 underline"
            >
              Terms of service
            </a>
          </span>
          .
        </p>

        <p className="mt-6">
          {" "}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
        </p>
      </form>

      <footer className="text-sm text-gray-600 mt-4">
        <p>
          <Link to="/" className="text-blue-500 underline">
            Back to Homepage
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Register;
