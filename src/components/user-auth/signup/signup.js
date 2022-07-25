import React, { useState } from "react";
import axios from "axios";
function Signup() {
  // Declaration of form field variable
  const [userRegister, setUserRegister] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  // Inputfield Handler
  const inputHandler = (e) => {
    const name = e.target.name; //which field you are targeted.
    const value = e.target.value; //what value you have entered in that field.

    setUserRegister({ ...userRegister, [name]: value }); //assigning the all input value in to the (userRegister) variable.
  };

  // submit Handeler

  const submitHandler = (e) => {
    const baseUrl = "http://localhost:4000/user";
    e.preventDefault();
    if (
      userRegister.name &&
      userRegister.email &&
      userRegister.phone &&
      userRegister.password
    ) {
      axios.post(baseUrl, userRegister).then((res) => {
        console.log(res);
      });
      setUserRegister({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
    } else {
      alert("all fields are required");
    }
  };

  return (
    <div className="div bg-orange-200 font-serif font-bold   mx-auto  p-16  w-1/3  shadow-2xl border-solid border-2 rounded-3xl border-sky-500 ">
      <div className="     text-center   text-4xl">
        <h2>SignUP</h2>
      </div>

      <form
        className="text-xl flex flex-col gap-y-4 p-4"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            required
            onChange={inputHandler}
            className="shadow-lg h-9 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="off"
            maxLength={10}
            required
            onChange={inputHandler}
            className="shadow-lg h-9 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            required
            onChange={inputHandler}
            className="shadow-lg h-9 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            required
            onChange={inputHandler}
            className="shadow-lg h-9 rounded-xl"
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="font-black bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
