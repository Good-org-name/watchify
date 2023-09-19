import React, { useState } from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import {Routes, Route } from 'react-router-dom'
import Account from "./Account";
import WatchedList from "./WatchedList";
import Hero from "./Hero"
import UserHome from "./UserHome";
import Register from "./Register"
import RecMovie from "./RecMovie";


const Root = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/account" element={<Account/>} />
        <Route exact path="/watchedlist" element={<WatchedList/>} />
        <Route exact path="/login" element={<SignIn/>} />
        <Route exact path="/userhome" element={<UserHome/>} />
        <Route exact path="/register" element={<Register/>} />
        {/* <Route exact path="/recmovie" element={<RecMovie/>} /> */}
        <Route exact path="/" element={<Hero/>} />
      </Routes>      

    </div>
  );
};

export default Root;
