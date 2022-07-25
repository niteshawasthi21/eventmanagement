import React from "react";
import { Link } from "react-router-dom";
function Admin() {
  return (
    <div className="p-32">
    <div className="div mx-auto w-1/4 shadow-2xl border-solid border-2 rounded-xl border-sky-500 p-16 flex text-center flex-col p-16 gap-5">
      <div className="">
        <button className="font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> <Link to="/addevent">Add Event</Link></button>
      </div>
      <div className="">
      <button className="font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> <Link to="/eventreport">Event Report</Link></button>
      </div>
    </div></div>
  );
}
export default Admin;
