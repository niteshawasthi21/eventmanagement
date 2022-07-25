import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  // Declaration of form field variable
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  // Inputfield Handler
  const inputHandlerLogin = (e) => {
    const name = e.target.name; //which field you are targeted.
    const value = e.target.value; //what value you have entered in that field.
    console.log(value, name);
    setLogin({ ...login, [name]: value });
    //assigning the all input value in to the (userRegister) variable.
  };
  const navigate = useNavigate();

  //loggedin=================================
   
  function logedIn(e) {
    const baseURL = "http://localhost:4000/admin";
    e.preventDefault();
    if (login.email && login.password) {
      axios.get(baseURL).then((res) => {
        const exist = res.data.find((user) => {
          return user.email === login.email && user.password === login.password;
        });

        if (exist) {
          localStorage.setItem("USER", login.email);
          alert("login successfull");
          navigate("/admin");
          console.log("true");
        } else {
          alert("Some thing went wrong");
        }
      });
    }
  }

   
  return (
    <div className="p-28">
      <div className="div bg-orange-200 font-serif font-bold   mx-auto  p-8  h-96  w-1/4  shadow-2xl border-solid border-2 rounded-3xl border-sky-500  ">
        <div className=" text-center   text-4xl">
          <h2>LogIn</h2>
        </div>

        <form className="text-xl flex flex-col gap-y-4 p-4" onSubmit={logedIn}>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={inputHandlerLogin}
              className="shadow-lg h-10 shadow-2xl border-solid border-2 rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={inputHandlerLogin}
              className="shadow-lg h-10 shadow-2xl border-solid border-2 rounded-xl"
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="font-black bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
