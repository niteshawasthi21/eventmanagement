import React from "react";

function Home() {
  return (
    <div>
      <div className="div  ">
        <img src="assets/images/event.jpeg" className="w-full  h-96" />
      </div>
      {/* ==================================== */}
      <h1 className="text-center font-black text-4xl font-serif italic hover:not-italic mt-6">Our Events</h1>

      <div className="our-event  p-8 flex gap-8">
        <div className="event-container ">
          <img src="assets/images/marriege.jpg" width="450px" className="skew-y-3 "  />
        </div>
        <div className="event-container ">
        <img src="assets/images/birthday.webp" width="450px" className="skew-y-3 " />
        </div>
        <div className="event-container ">
        <img src="assets/images/conference.webp" width="450px" className=" skew-y-3 "/>
        </div>
        
      </div>
      {/* ===================================== */}
    </div>
  );
}

export default Home;
