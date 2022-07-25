import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addevent from "./components/addevent/addevent";
import Admin from "./components/admin/admin";
import Footer from "./components/common/footer/footer";
import Header from "./components/common/header/header";
import Eventreport from "./components/eventreport/eventreport";
import Home from "./components/home/home";

import Login from "./components/user-auth/login/login";
import Signup from "./components/user-auth/signup/signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={< Admin />} />
          <Route path="/addevent" element={< Addevent />} />
          <Route path="/eventreport" element={< Eventreport />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
