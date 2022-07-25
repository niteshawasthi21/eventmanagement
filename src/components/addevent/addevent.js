import React, { useState } from "react";
import axios from "axios";
function Addevent() {
  const [event, setEvent] = useState({
    eventname: "",
    eventdes: "",
    eventsd: "",
    evented: "",
  });

  const inputHandler = (e) => {
    const name = e.target.name; //which field you are targeted.
    const value = e.target.value; //what value you have entered in that field.

    setEvent({ ...event, [name]: value }); //assigning the all input value in to the (userRegister) variable.
  };
  const submitHandler = (e) => {
    const baseUrl = " http://localhost:4000/events";
    e.preventDefault();
    if (event.eventname&&event.eventdes&&event.eventsd&&event.evented) 
    {
      axios.post(baseUrl, event).then((res) => {
        console.log(res);
      });
      setEvent({
        eventname: "",
        eventdes: "",
        eventsd: "",
        evented: "",
      });
      alert("Event added successfully");
    } 
    else {
      alert("all fields are required");
    }
  };

  return (
    <div className="p-8">
    <div className="div bg-orange-200 font-serif font-bold   mx-auto  p-8   w-1/3  shadow-2xl border-solid border-2 rounded-3xl border-sky-500 ">
      <div className="     text-center   text-4xl">
        <h2>Add Events</h2>
      </div>

      <form
        className="text-xl flex flex-col gap-y-4 p-4"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="eventname">Event Name</label>
          <input
            type="text"
            id="eventname"
            name="eventname"
            autoComplete="off"
            required
            className="shadow-lg h-9 rounded-xl"
            onChange={inputHandler}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="eventdes">Event Description</label>
          <input
            type="text"
            id="eventdes"
            name="eventdes"
            autoComplete="off"
            required
            onChange={inputHandler}
            className="shadow-lg h-9 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="eventsd">Event Start Date</label>
          <input
            type="date"
            id="eventsd"
            name="eventsd"
            autoComplete="off"
            required
            onChange={inputHandler}
            className="shadow-lg h-9 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="evented">Event End Date</label>
          <input
            type="date"
            id="evented"
            name="evented"
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
            Add Event
          </button>
        </div>
      </form>
    </div></div>
  );
}

export default Addevent;
