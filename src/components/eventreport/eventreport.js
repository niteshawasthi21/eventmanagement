import React, { useEffect, useState } from "react";
import axios from "axios";
import "./event.css";
function Eventreport() {
  const [data, setEvents] = useState([]);
  const baseURL = "http://localhost:4000/events";

  function getEvents() {
    axios.get(baseURL).then((response) => {
      setEvents(response.data);
    });
  }

  useEffect(() => {
    getEvents();
  }, []);

  const deleteEvents = (id) => {
    axios.delete(`http://localhost:4000/events/${id}`).then((res) => {
      alert("Delete Successfully ");

      getEvents();
    });
  };

  return (
    <div className="div p-8">
       <div className="container mx-auto p-8 mb-16" >
      <h1>Events Report</h1>
      <table className="rwd-table" >
      <tbody >
                <tr>
                  <th>Event Name</th>
                  <th>Event Description</th>
                  <th>Event Start Date</th>
                  <th>Event End Date</th>
                  <th>Delete</th>
                </tr>
      {data.map((data) => {
           
        return (
         
         
           
              
                <tr key={data.id}>
                  <td data-th="Supplier Code">{data.eventname}</td>
                  <td data-th="Supplier Name">{data.eventdes}</td>
                  <td data-th="Invoice Number">{data.eventsd}</td>
                  <td data-th="Invoice Date">{data.evented}</td>
                  <td>
                    <button
                      className="font-bold bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                      onClick={() => deleteEvents(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
             
            
          
        );
      })}
       </tbody></table>
    </div>
   </div>
  );
}

export default Eventreport;
