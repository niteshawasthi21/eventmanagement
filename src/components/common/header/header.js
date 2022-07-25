import React from "react";
import { Link } from "react-router-dom";
function Header() {
 

   

 
  let email= localStorage.getItem("USER");
 const logout = () => {
    localStorage.removeItem("USER");
     localStorage.removeItem('USER');
  };
  return (
    <div className="bg-gray-900 text-indigo-50 font-bold text-3xl font-sans flex justify-between h-14 items-center fixed w-full top-0 left-0 z-20">
      <div className="logo mx-8">
        <Link to="/home">
         
          <h2>EventManagement</h2>
        </Link>
      </div>

      <div className="text-xl flex gap-4 mx-8">
       
        {
           email ?
          <><button className="font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  >
          <Link to="/admin">{email}</Link>
        </button>
          
          <button className="font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  onClick={ logout}>
          <Link to="/login">Logout</Link>
        </button>
        </>
        :
          <> <button className="font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  >
          <Link to="/signup">Signup</Link>
        </button>
       
        <button className="font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  >
          <Link to="/login">LogIn</Link>
        </button>
        </>
        }
       
      </div>
    </div>
  );
}

export default Header;
